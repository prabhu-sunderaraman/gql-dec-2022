const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone")
let schema = require('./day03-schema');
let resolvers = require('./day03-resolvers');
const HelloApi = require("./day03-hello-api");
const { RequestLogging } = require("./request-logging");

let server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [RequestLogging]
    //cache: //Configure External cache; default is InMemoryCache
});

startStandaloneServer(server, {
    listen: 9000,
    context: async ({req}) => {
        let {cache} = server;
        const token = req.headers['authorization'];
        if(!token) {
            throw new Error("Authentication failed. No token")
        }
        return {
            dataSources: {
                helloApi: new HelloApi({cache, token}),
//                moviesApi: new MoviesApi()
            }
        }
    } 
})
.then(response => console.log(`Day03 GraphQL server started at ${response.url}`));