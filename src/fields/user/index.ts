import { createUser, fetchUser, fetchUserList, updateUser } from './resolver';

const query = {
  fetchUser,
  fetchUserList
};

const mutation = {
  createUser,
  updateUser
};

export const userResolvers = {
  query,
  mutation
};
