module.exports = {
  Query: {
    puzzles: async (_, __, { dataSources }) =>
      dataSources.puzzleAPI.getAllPuzzles(),
    puzzle: async (_, { id }, { dataSources }) =>
      dataSources.puzzleAPI.getPuzzle({ puzzleId: id })
  }
}
