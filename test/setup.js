const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../index');

global.expect = expect;
global.supertest = supertest;
global.app = app;