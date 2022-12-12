const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")
let schema = require('./day03-schema');
let resolvers = require('./day03-resolvers');
const HelloApi = require("./day03-hello-api");

let server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //cache: //Configure External cache; default is InMemoryCache
});

startStandaloneServer(server, {
    listen: 9000,
    context: async ({req}) => {
        let {cache} = server;
        const token = req.headers['authorization'];
        return {
            dataSources: {
                helloApi: new HelloApi({cache, token}),
//                moviesApi: new MoviesApi()
            }
        }
    } 
})
.then(response => console.log(`Day03 GraphQL server started at ${response.url}`));