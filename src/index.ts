import * as express from "express";
import * as graphqlHTTP from "express-graphql";
const { buildSchema } = require("graphql");
const db = require("../models/");

const userSchema = buildSchema(`
  type Query {
    user(id: Int!): User
    users(name: String): [User]
  }

  type Mutation {
    registerUser(name: String!, email: String!): User
    updateUserName(id: Int!, name: String!): User
    updateUserEmail(id: Int!, email: String!): User
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
`);

const getUser = async (args: { id: number }) =>
  await db.User.findOne({ where: { id: args.id } });

const getUsers = async (args: { name: string | undefined }) =>
  await db.User.findAll({ where: args.name ? { name: args.name } : undefined });

const updateUserName = async (args: { id: number; name: string }) => {
  await db.User.update({ name: args.name }, { where: { id: args.id } });
  return getUser(args);
};

const updateUserEmail = async (args: { id: number; email: string }) => {
  await db.User.update({ email: args.email }, { where: { id: args.id } });
  return getUser(args);
};

const registerUser = async (args: { name: string; email: string }) =>
  await db.User.create({ name: args.name, email: args.email });

const app = express();

app.use(
  "/graphql",
  graphqlHTTP.graphqlHTTP({
    schema: userSchema,
    rootValue: {
      user: getUser,
      users: getUsers,
      updateUserName,
      updateUserEmail,
      registerUser,
    },
    graphiql: true,
  })
);

app.listen(3000, () =>
  console.log("Express GraphQL Server Now Running On localhost:3000/graphql")
);
