import { GraphQLScalarType } from 'graphql';
import { MutationResolvers, QueryResolvers } from '~/libs/generated/resolvers';

export type IQueryResolver = Required<QueryResolvers>;
export type IMutationResolver = Required<MutationResolvers>;

const GraphQLDate = new GraphQLScalarType({
  name: 'Date',
  serialize: (value: string) => new Date(value)
});

export const types = {
  GraphQLDate
};

export const resolveMaybe = <T>(x: T | null) => (x === null ? undefined : x);
