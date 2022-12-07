const {mergeTypeDefs, mergeResolvers} = require("@graphql-tools/merge");
const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")

let voidResolver = require('./void.resolver');

let mobileSchema = require('./mobile.schema');
let mobileResolver = require('./mobile.resolver');

let bookSchema = require('./book.schema');
let bookResolver = require('./book.resolver');

let server = new ApolloServer({
    typeDefs: mergeTypeDefs([bookSchema, mobileSchema]),
    resolvers: mergeResolvers([bookResolver, mobileResolver, voidResolver]),
    introspection: true //make it false based on the environment; in production or demo
});

startStandaloneServer(server, {
    listen: 9000
})
.then(response => console.log(`GraphQL server started at ${response.url}`));