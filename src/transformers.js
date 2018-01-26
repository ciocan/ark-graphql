export const transformAccount = ({ success, account }) => {
  return { success, ...account };
};
