require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); // Live logger for requests
const cors = require('cors'); // for cross origin fetches
const helmet = require('helmet'); // security for Header (hiding info)
const knex = require('knex') // database connection
const LandingRouter = require('./routers/landing-router');
const ChoresRouter = require('./routers/chores-router');
const errorHandler = require('./error-handler')
const app = express();

const NODE_ENV = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL;
const morganOption =
  (NODE_ENV === 'production' || NODE_ENV === 'test')
    ? 'tiny'
    : 'common';
            
app.use(helmet());
app.use(cors());
app.use(morgan(morganOption));
app.use(express.json()) // bodyParser for POST requests

app.use(LandingRouter);
app.use(ChoresRouter);
app.use(errorHandler);

module.exports = app;