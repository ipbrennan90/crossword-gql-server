const { RESTDataSource } = require('apollo-datasource-rest')

class PuzzleAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:5000/'
  }

  async getAllPuzzles() {
    const res = await this.get('puzzles')
    return res && res.data.length
      ? res.data.map(p => this.puzzleReducer(p))
      : []
  }

  async getPuzzleById(puzzleId) {
    const res = await this.get('puzzles', { puzzle_id: puzzleId })
    return res && res.data.length
      ? res.data.map(p => this.puzzleReducer(p))
      : []
  }

  puzzleReducer(puzzle) {
    return {
      id: puzzle.id,
      name: puzzle.name,
      createdAt: puzzle.created_at,
      updatedAt: puzzle.updated_at,
      board: {
        rows: puzzle.board.rows
      }
    }
  }
}

module.exports = PuzzleAPI
