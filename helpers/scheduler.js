const schedule = require('node-schedule');
const { sendMessage } = require('./twilio.js');

module.exports = {
  scheduleHabit: (message, habit, hour, minutes, frequency) => {
    schedule.scheduleJob(`${minutes} ${hour} * * ${frequency}`, () => {
      sendMessage(message);
      console.log(`scheduled ${habit} for ${minutes} ${hour} * * ${frequency}`)
    })
  },
  scheduleHello: () => {
    const date = new Date(2023, 01, 10, 12, 34);
    schedule.scheduleJob('*/10 * * * * *', () => {
      console.log('hello');
      sendMessage('good afternoon');
    })
  }
}