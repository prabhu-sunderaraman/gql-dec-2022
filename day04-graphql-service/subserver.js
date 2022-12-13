const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const { createServer } = require('http');
const express = require('express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const bodyParser = require('body-parser');
const cors = require('cors');
const {PubSub} = require('graphql-subscriptions');

const pubsub = new PubSub();

let commentsList = [];
let typeDefs = `
    type Comment {
        text: String
    }
    type Query {
        hello(name: String): String,
        temperature: String,
        comments: [Comment]
    }
    type Mutation {
        addComments(text: String): Comment
    }
    type Subscription {
        commentAdded: Comment
    }
`;

let resolvers = {
    Query: {
        hello: (src, args, context) => {
            return `hi ${args.name}`;
        },
        temperature: (src, args, context) => {
            return `${Math.random() * 100}` ;
        },
        comments: () => commentsList 
    },
    Mutation: {
        addComments: (src, args, context) => {
            let comment = { text: args.text };
            commentsList.push(comment);
            pubsub.publish('COMMENT_ADDED', { commentAdded: comment });
            return comment;
        }
    },
    Subscription: {
        commentAdded: {
            subscribe: () => pubsub.asyncIterator(['COMMENT_ADDED'])
        }
    }
};

// Create the schema, which will be used separately by ApolloServer and
// the WebSocket server.
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create an Express app and HTTP server; we will attach both the WebSocket
// server and the ApolloServer to this HTTP server.
const app = express();
const httpServer = createServer(app);

// Create our WebSocket server using the HTTP server we just set up.
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});
// Save the returned server's info so we can shutdown this server later
const serverCleanup = useServer({ schema }, wsServer);

// Set up ApolloServer.
const server = new ApolloServer({
  schema,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

server
.start()
.then(response => {
    app.use('/graphql', cors(), bodyParser.json(), expressMiddleware(server));

    const PORT = 9000;
    // Now that our HTTP server is fully set up, we can listen to it.
    httpServer.listen(PORT, () => {
      console.log(`Sub Server is now running on http://localhost:${PORT}/graphql`);
    });
});


