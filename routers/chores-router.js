const express = require('express');
const ChoresService = require('../services/chores-service')

const ChoresRouter = express.Router();

ChoresRouter.route('/api/chores')
    .get((req, res) => {
        const db = req.app.get('db');
        ChoresService.getChores(db)
          .then(chores => res.json(chores))
      })
    .post((req, res) => {
      const db = req.app.get('db');
      const { name } = req.body;
      ChoresService.createChore(db, {name})
        .then(chores => {
          return res.status(201).send(chores[0]);
      })
    })

ChoresRouter.route('/api/chores/:id')
  .get((req, res) => {
    const db = req.app.get('db');
    const chore_id = Number(req.params.id);
    ChoresService.getChore(db, chore_id)
      .then(result => {
        if (!result) res.status(400).send({error: 'Invalid data.'});
        return res.json(result);
      })
      .catch(error => console.log({ error }));
  })
  .patch((req, res) => {
    const db = req.app.get('db');
    const chore_id = req.params.id;
    const { name, completed } = req.body;
    const values = { name, completed };
    Object.entries(values).forEach(([key, val]) => {
      if (val === undefined) delete values[key];
    })
    ChoresService.editChore(db, chore_id, values)
      .then(chores => {
        return res.status(201).send(chores[0]);
    })
  })
  .delete((req, res) => {
    const db = req.app.get('db');
    const chore_id = req.params.id;
    ChoresService.deleteChore(db, chore_id)
      .then(result => res.status(301).end());
})

module.exports = ChoresRouter;