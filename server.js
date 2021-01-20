const app = require('./index');
const knex = require('knex');
const { DATABASE_URL, TEST_DATABASE_URL, NODE_ENV } = require('./config');

const knexInstance = knex({
  client: 'pg',
  connection: (NODE_ENV !== 'test') ? DATABASE_URL : TEST_DATABASE_URL
});

app.set('db', knexInstance);

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
});