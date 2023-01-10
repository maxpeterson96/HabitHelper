const models = require('./models');

module.exports = {
  getHabits: (req, res) => {
    models.queryHabits()
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  },
  getHabit: (req, res) => {
    const { query: { id } } = req;
    models.queryHabits(i)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  },
  post: (req, res) => {
    const { query: { habit } } = req;
    const { query: { description } } = req;
    const { query: { time } } = req;
    models.postHabit(habit, description, time)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  },
  update: (req, res) => {
    models.updatehabit(req.params.product_id)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  }
};


