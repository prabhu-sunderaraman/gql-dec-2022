const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")
let schema = require('./day02-schema');
let resolvers = require('./day02-resolvers');

let server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

startStandaloneServer(server, {
    listen: 9000 
})
.then(response => console.log(`GraphQL server started at ${response.url}`));