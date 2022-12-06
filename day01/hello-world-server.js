const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")

let schema = `
    type Query {
        temperature: Float
    }
`;

let resolvers = {
    Query: {
        temperature: () => Math.random() * 100
    }
};

let server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

startStandaloneServer(server, {
    listen: 9000
})
.then(response => console.log(`GraphQL server started at ${response.url}`));