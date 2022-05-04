import * as fs from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { MutationResolvers, QueryResolvers } from '~/libs/generated/resolvers';
import { userResolvers } from './user';

const resolvers: {
  Query: Required<QueryResolvers>;
  Mutation: Required<MutationResolvers>;
} = {
  Query: {
    ...userResolvers.query
  },
  Mutation: {
    ...userResolvers.mutation
  }
};

const typeDefs = fs.readFileSync('./graphql/schema.graphql', {
  encoding: 'utf8'
});

export const schema = makeExecutableSchema({ resolvers, typeDefs });
