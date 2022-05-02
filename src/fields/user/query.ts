import { GraphQLList, GraphQLNonNull } from "graphql";
import { fetchUser, fetchUserList } from "./resolver";
import { fetchUserInputType, fetchUserListInputType, userType } from "./types";

export const query = {
  fetchUserList: {
    type: new GraphQLList(userType),
    args: {
      user: {
        type: new GraphQLNonNull(fetchUserListInputType),
      },
    },
    resolve: (_, args: { name: string | undefined }) => fetchUserList(args),
  },
  fetchUser: {
    type: userType,
    args: {
      user: {
        type: new GraphQLNonNull(fetchUserInputType),
      },
    },
    resolve: (_, args: { id: number }) => fetchUser(args),
  },
};