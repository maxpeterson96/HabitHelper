const db = require('../database/db.js');
const { scheduleHabit, scheduleHello } = require('../helpers/scheduler.js');

module.exports = {
  queryHabits: () => {
    scheduleHello();
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
  postHabit: ({ habit, message, hour, minutes, frequency }) => {
    return db.query(`INSERT INTO habits (habit, message, hour, minutes, frequency) VALUES ('${habit}', '${message}', ${hour}, ${minutes}, '${frequency}')`)
      .then((results) => {
        scheduleHabit(message, habit, hour, minutes, frequency);
        console.log('posted habit');
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