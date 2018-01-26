export const transformAccountResponse = ({ success, account }) => {
  return { success, ...account };
};

export const transformTopAccountResponse = (response) => {
  return response;
};
