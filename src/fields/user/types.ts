import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) }
  })
});

export const fetchUserListInputType = new GraphQLInputObjectType({
  name: 'FetchUserListInputType',
  fields: {
    name: { type: GraphQLString }
  }
});

export const fetchUserInputType = new GraphQLInputObjectType({
  name: 'FetchUserInputType',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) }
  }
});

export const createUserInputType = new GraphQLInputObjectType({
  name: 'CreateUser',
  description: '',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) }
  }
});

export const updateUserInputType = new GraphQLInputObjectType({
  name: 'UpdateUser',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});
