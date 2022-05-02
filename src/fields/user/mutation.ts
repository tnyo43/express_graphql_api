import { GraphQLNonNull } from "graphql";
import { createUser, updateUser } from "./resolver";
import { createUserInputType, updateUserInputType, userType } from "./types";

export const mutation = {
  createUser: {
    type: userType,
    args: {
      user: {
        type: new GraphQLNonNull(createUserInputType),
      },
    },
    resolve: (_, args: { name: string; email: string }) => createUser(args),
  },
  updateUser: {
    type: userType,
    args: {
      user: {
        type: new GraphQLNonNull(updateUserInputType),
      },
    },
    resolve: (
      _,
      args: { id: number; name: string | undefined; email: string | undefined }
    ) => updateUser(args),
  },
};
