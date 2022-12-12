const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")
let schema = require('./day03-schema');
let resolvers = require('./day03-resolvers');
const HelloApi = require("./day03-hello-api");

let server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

startStandaloneServer(server, {
    listen: 9000,
    context: () => {
        return {
            dataSources: {
                helloApi: new HelloApi()
            }
        }
    } 
})
.then(response => console.log(`Day03 GraphQL server started at ${response.url}`));