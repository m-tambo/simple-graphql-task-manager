'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema/index.js');

const PORT = 3300;

const app = express();

// GraphQL
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL in-browser IDE for testing our GraphQL server
app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }));

app.listen(PORT, () => console.log(`GraphiQL is running on http://localhost:${PORT}/graphiql`));
