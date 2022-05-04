import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from '~/fields';
import * as cors from 'cors';

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
