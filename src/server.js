const express = require("express");
const expressGraphql = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");

const messageSchema = buildSchema(`
  type Query {
    message: String
  }
`);

const userSchema = buildSchema(`
  type Query {
    user(userId: Int!): User
    users(name: String): [User]
  }

  type Mutation {
    updateUserName(userId: Int!, name: String!): User
  }

  type User {
    userId: Int!
    name: String
  }
`);

let userData = [
  {
    userId: 1,
    name: "Alice",
  },
  {
    userId: 2,
    name: "Bob",
  },
  {
    userId: 3,
    name: "Chis",
  },
];

const getUser = (args) =>
  userData.filter((user) => user.userId === args.userId)[0];

const getUsers = (args) =>
  !!args.name ? userData.filter((user) => user.name === args.name) : userData;

const updateUserName = (args) => {
  userData = userData.map((user) =>
    user.userId === args.userId ? { ...user, name: args.name } : user
  );
  return getUser(args);
};

const app = express();

app.use(
  "/graphql/message",
  expressGraphql({
    schema: messageSchema,
    rootValue: {
      message: () => "Hellow World!",
    },
    graphiql: true,
  })
);

app.use(
  "/graphql/user",
  expressGraphql({
    schema: userSchema,
    rootValue: {
      user: getUser,
      users: getUsers,
      updateUserName,
    },
    graphiql: true,
  })
);

app.listen(3000, () =>
  console.log("Express GraphQL Server Now Running On localhost:3000/graphql")
);

/* 動作確認用 */
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("graphql_express_api", "root", "password", {
  host: "db",
  dialect: "mysql",
});

app.use("/", async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  res.send("respond with a resource");
});
