import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { fields } from '~/fields';
import * as cors from 'cors';

const schema = new GraphQLSchema(fields);

const app = express();

const allowList = ['http://localhost:5000'];
app.use(
  cors((request, callback) => {
    const origin = request.headers.origin;
    const options = {
      origin: origin && allowList.includes(origin)
    };
    callback(null, options);
  })
);

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(3000, () =>
  console.log('Express GraphQL Server Now Running On localhost:3000/graphql')
);
