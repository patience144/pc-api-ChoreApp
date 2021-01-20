const supertest = require('supertest');
const chai = require('chai');
const { expect } = require('chai');
const knex = require('knex');
const app = require('../index');
const createChores = require('./index-fixtures');
const { TEST_DATABASE_URL } = require('../config.js');

describe('The App', () => {
  const db = knex({
    client: 'pg',
    connection: TEST_DATABASE_URL
  });
  
  app.set('db', db);
  
  before('cleaning tables', () => {
    return db.raw('TRUNCATE chores RESTART IDENTITY CASCADE');
  });
  
  after('disconnect from db', () => {
    return db.destroy();
  });
  context('renders Landing Page', () => {
    it('GET / responds with 200 status and an html page.', () => {
      return supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/);
    });
  });
  context('Chore Data', () => {
    let chores;
    let chore = {
      name: 'newName'
    };
    before('inserting chores to table', () => {
      chores = createChores();
      return db('chores')
        .insert(chores)
    });
    it('GET /api/chores responds with 200 status and an array of objects.', () => {
      return supertest(app)
        .get('/api/chores')
        .expect(200)
        .then(res => expect(res.body).to.be.an('array'));
    });
    it('POST /api/chores responds with 201 status and an object.', () => {
      return supertest(app)
        .post('/api/chores')
        .send(chore)
        .expect(201)
        .then(res => expect(res.body).to.be.an('object'));

    });
    it('PATCH /api/chores/:choreID responds with 201 status and an object.', () => {
        const values = {
          name: 'newerName'
        }
      return supertest(app)
        .patch('/api/chores/1')
        .send(values)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
        })
    });
    it('DELETE /api/chores/:choreID responds with 301 status.', () => {
      return supertest(app)
        .delete(`/api/chores/1`)
        .expect(301);
    });
  });
});

