const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const PuzzleApi = require('./datasources/puzzle')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    puzzleAPI: new PuzzleApi()
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
