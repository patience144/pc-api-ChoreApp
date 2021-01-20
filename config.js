module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '5000',
  API_KEY: process.env.API_KEY || 'my-secret-key',
  DATABASE_URL: process.env.DATABASE_URL || `postgres://fdxhyryhwdjalc:28b1431b9dc3142c53b05df8942fe05665c2137dddf595fb2da7ecba7ed19c82@ec2-34-202-65-210.compute-1.amazonaws.com:5432/ddfrmpdsnlutoi`,
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://patience@localhost/choreapp-test'
}