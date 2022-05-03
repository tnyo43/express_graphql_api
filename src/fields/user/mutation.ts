import { GraphQLNonNull } from 'graphql';
import { createUser, updateUser } from './resolver';
import { createUserInputType, updateUserInputType, userType } from './types';

export const mutation = {
  createUser: {
    type: userType,
    args: {
      user: {
        type: new GraphQLNonNull(createUserInputType)
      }
    },
    resolve: (_: unknown, args: { user: { name: string; email: string } }) => {
      return createUser(args.user);
    }
  },
  updateUser: {
    type: userType,
    args: {
      user: {
        type: new GraphQLNonNull(updateUserInputType)
      }
    },
    resolve: (
      _: unknown,
      args: {
        user: {
          id: number;
          name: string | undefined;
          email: string | undefined;
        };
      }
    ) => updateUser(args.user)
  }
};
