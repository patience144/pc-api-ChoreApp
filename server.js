const app = require('./index');
const knex = require('knex');
const { DATABASE_URL, TEST_DATABASE_URL, NODE_ENV, PORT } = require('./config');

const knexInstance = knex({
  client: 'pg',
  connection: (NODE_ENV !== 'test') ? DATABASE_URL : TEST_DATABASE_URL
});

app.set('db', knexInstance);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});