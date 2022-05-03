import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { fields } from '~/fields';

const schema = new GraphQLSchema(fields);

const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(3000, () =>
  console.log('Express GraphQL Server Now Running On localhost:3000/graphql')
);
