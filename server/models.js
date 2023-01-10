const db = require('../database/db.js');

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
  postHabit: (habit, description, time) => {
    return db.query(`INSERT INTO habits VALUES ("${habit}", "${description}", "${time}")`)
      .then((results) => {
        return results
      })
      .catch((error) => {
        return error;
      })
  },
  updateHabit: () => {
    return;
  }
}