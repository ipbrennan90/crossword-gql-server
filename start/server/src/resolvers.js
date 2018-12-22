module.exports = {
  Query: {
    puzzles: async (_, __, { dataSources }) =>
      dataSources.puzzleAPI.getAllPuzzles()
  }
}
