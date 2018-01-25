import fetch from 'node-fetch';

const NET_HASH = '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988';
const VERSION = '1.0.1';
const NODE_PORT = 4001;
const NODE_URL = `https://api.arknode.net`;

export const getBalance = async ({
  address,
  nethash = NET_HASH,
  version = VERSION,
  port = NODE_PORT
}) => {
  const options = {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
      nethash,
      version,
      port
    }
  };

  const uri = `/api/accounts/getBalance?address=${address}`;

  const response = await fetch(`${NODE_URL}${uri}`, options);
  return await response.json();
};
