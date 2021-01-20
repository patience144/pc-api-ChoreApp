module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '5000',
  API_KEY: process.env.API_KEY || 'my-secret-key',
  DATABASE_URL: process.env.DATABASE_URL || `postgres://scvfmqgnshmewt:48799e70413ee6be373db55a8c3219ee3bab530dbd65b838ebcc6e4a2fc386e4@ec?sslmode=require`,
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://patience@localhost/choreapp-test'
}