import { GraphQLServer } from 'graphql-yoga';
import { typeDefs, resolvers } from './data/schema';

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => console.log('Server is running on localhost:' + options.port)); // eslint-disable-line
