import { getBalance } from '../ark-api';
import { importSchema } from 'graphql-import';
import * as path from 'path';


export const resolvers = {
  Query: {
    getBalance: (_, { address }) => getBalance({ address })
  }
};

export const typeDefs = importSchema(path.join(__dirname, './schema.graphql'));
