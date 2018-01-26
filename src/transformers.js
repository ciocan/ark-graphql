export const transformAccountResponse = ({ success, error, account }) => {
  return { success, error, ...account };
};

export const transformTopAccountResponse = (response) => {
  return response;
};

export const transformDelegatesResponse = (response) => {
  return response;
};

export const transformTransactionResponse = ({ success, error, transaction }) => {
  return { success, error, transaction };
};
