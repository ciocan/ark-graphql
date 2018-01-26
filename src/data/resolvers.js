import {
  getBalance,
  getAccount,
  getTopAccounts,
  getDelegates,
  getTransaction
} from '../ark-api';

export const resolvers = {
  Query: {
    getBalance: (_, { address }) => getBalance(address),
    getAccount: (_, { address }) => getAccount(address),
    getTopAccounts: () => getTopAccounts(),
    getDelegates: (_, { address }) => getDelegates(address),
    getTransaction: (_, { id }) => getTransaction(id)
  }
};
