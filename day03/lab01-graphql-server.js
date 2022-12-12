const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")
let schema = require('./lab01-schema');
let resolvers = require('./lab01-resolvers');

let server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

startStandaloneServer(server, {
    listen: 9000 
})
.then(response => console.log(`Lab01 GraphQL server started at ${response.url}`));