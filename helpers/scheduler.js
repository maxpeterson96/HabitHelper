const schedule = require('node-schedule');
const { sendMessage } = require('./twilio.js');
const models = require('../server/models');

module.exports = {
  scheduleHabit: (message, habit, hour, minutes, frequency) => {
    const cron = `${minutes} ${hour} * * ${frequency}`;
    console.log('cron', cron);
    schedule.scheduleJob(cron, () => {
      sendMessage(message);
      console.log(`sent ${habit} at ${cron}`)
    })
    console.log(`scheduled ${habit} for ${cron}`)
  },
  getHabitsAndSchedule: () => {
    models.queryHabits()
      .then((results) => {
        schedule.gracefulShutdown()
          .then(() => {
            results.map((habit) => {
              scheduleHabit(
                habit.message,
                habit.habit,
                habit.hour,
                habit.minutes,
                habit.frequency
              )
              })
          })
      })
  },
  scheduleHello: () => {
    schedule.scheduleJob('*/10 * * * * *', () => {
      console.log('hello at 10:20');
      // sendMessage('Hello and welcome to Habit Helper. To get started, please schedule your new habits through our online portal');
    })
  }
}


// */10 * * * * *

// const cron = `${minutes} ${hour} * * ${frequency}`;