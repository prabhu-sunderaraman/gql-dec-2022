import  {ApolloClient, InMemoryCache} from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: "http://localhost:9000",
    cache: new InMemoryCache(),
    // defaultOptions: {
    //     query: {
    //         fetchPolicy: "no-cache"
    //     }
    // }
}); 

