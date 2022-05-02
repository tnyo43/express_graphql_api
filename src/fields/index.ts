import { GraphQLObjectType } from "graphql";
import { userField } from "./user";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userField.query,
  },
});

export const mutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "The root query type.",
  fields: {
    ...userField.mutation,
  },
});
