const models = require('./models');
const schedule = require('node-schedule');
const { scheduleHabit } = require('../helpers/scheduler.js');

module.exports = {
  getHabits: (req, res) => {
    models.queryHabits()
      .then((results) => res.status(200).send(results))
      .catch((error) => res.status(500).send(error))
  },
  getHabit: (req, res) => {
    const { query: { id } } = req;
    models.queryHabits(id)
      .then((results) => res.status(200).send(results))
      .catch((error) => res.status(500).send(error))
  },
  post: (req, res) => {
    models.postHabit(req.body)
      .then((results) => res.status(201).send(results))
      .catch((error) => res.status(500).send(error))
  },
  update: (req, res) => {
    models.updatehabit(req.params.product_id)
      .then((results) => res.status(204).send(results))
      .catch((error) => res.status(500).send(error))
  },
};


