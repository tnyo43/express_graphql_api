const express = require("express");
const expressGraphql = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => "Hellow World!",
};

const app = express();
app.use(
  "/graphql",
  expressGraphql({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
