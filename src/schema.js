const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    puzzles: [Puzzle]!
    puzzle(id: ID!): Puzzle
    me: User
  }

  type Puzzle {
    id: ID!
    name: String
    createdAt: String
    updatedAt: String
    board: Board
  }

  type Board {
    rows: [[String]]
  }

  type User {
    id: ID!
    email: String!
    puzzles: [Puzzle]!
  }

  type Mutation {
    createPuzzle(puzzleId: ID, board: [[String]]!): PuzzleUpdateResponse!
    deletePuzzle(puzzleId: ID!): PuzzleUpdateResponse!
    login(email: String): String
  }

  type PuzzleUpdateResponse {
    success: Boolean!
    message: String
    puzzle: Puzzle
  }
`

module.exports = typeDefs
