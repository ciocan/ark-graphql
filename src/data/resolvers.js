import {
  getBalance,
  getAccount,
  getTopAccounts
} from '../ark-api';

export const resolvers = {
  Query: {
    getBalance: (_, { address }) => getBalance(address),
    getAccount: (_, { address }) => getAccount(address),
    getTopAccounts: () => getTopAccounts(),
  }
};
