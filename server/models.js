const db = require('../database/db.js');
const { scheduleHabit } = require('../helpers/scheduler.js');

module.exports = {
  queryHabits: () => {
    return db.query('SELECT * FROM habits')
      .then((results) => {
        return results.rows
      })
      .catch((error) => {
        return error;
      })
  },
  queryHabit: (id) => {
    return db.query(`SELECT * FROM habits WHERE id=${id}`)
      .then((results) => {
        return results.rows
      })
      .catch((error) => {
        return error;
      })
  },
  postHabit: ({ habit, message, time, frequency }) => {
    console.log('in models', message)
    return db.query(`INSERT INTO habits (habit, message, time, frequency) VALUES ('${habit}', '${message}', ${time}, '${frequency}')`)
      .then((results) => {
        scheduleHabit(message, frequency);
        return results
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
  },
  updateHabit: () => {
    return;
  }
}