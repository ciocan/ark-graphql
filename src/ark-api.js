import fetch from 'node-fetch';
import {
  transformAccountResponse,
  transformTopAccountResponse,
  transformDelegatesResponse,
  transformTransactionResponse,
  transformTransactionsResponse
} from './transformers';

const NET_HASH = '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988';
const VERSION = '1.0.1';
const NODE_PORT = 4001;
const NODE_URL = `https://node1.arknet.cloud`;

const makeApiCall = async (uri) => {
  const options = {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
      NET_HASH,
      VERSION,
      NODE_PORT
    }
  };

  const response = await fetch(`${NODE_URL}${uri}`, options);
  return await response.json();
};

export const getBalance = (address) =>
  makeApiCall(`/api/accounts/getBalance?address=${address}`);

export const getAccount = (address) =>
  makeApiCall(`/api/accounts?address=${address}`)
    .then(transformAccountResponse);

export const getTopAccounts = () =>
  makeApiCall(`/api/accounts/top`)
    .then(transformTopAccountResponse);

export const getDelegates = (address) =>
  makeApiCall(`/api/accounts/delegates?address=${address}`)
    .then(transformDelegatesResponse);

export const getTransaction = (id) =>
  makeApiCall(`/api/transactions/get?id=${id}`)
    .then(transformTransactionResponse);

export const getTransactions = ({ limit }) =>
  makeApiCall(`/api/transactions?limit=${limit}`)
    .then(transformTransactionsResponse);
