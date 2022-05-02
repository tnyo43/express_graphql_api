import { GraphQLObjectType } from "graphql";
import { userField } from "./user";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userField.query,
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "The root query type.",
  fields: {
    ...userField.mutation,
  },
});

export const fields = { query, mutation };
