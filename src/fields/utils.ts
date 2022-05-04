import { GraphQLScalarType } from 'graphql';

const GraphQLDate = new GraphQLScalarType({
  name: 'Date',
  serialize: (value: string) => new Date(value)
});

export const types = {
  GraphQLDate
};
