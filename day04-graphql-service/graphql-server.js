const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")
let schema = require('./schema');
let resolvers = require('./resolvers');

let server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

startStandaloneServer(server, {
    listen: 9000 
})
.then(response => console.log(`GraphQL server started at ${response.url}`));