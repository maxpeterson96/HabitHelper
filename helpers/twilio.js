const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


module.exports = {
  sendMessage: (body) => {
    client.messages
    .create({
       body,
       from: '+17657032650',
       to: '+16508884721'
     })
    .then(message => console.log(message.sid));
  },
  sendHello: () => {
    client.messages
    .create({
       body: 'Hello! This is Habit Helper wishing you a great day',
       from: '+17657032650',
       to: '+16508884721'
     })
    .then(message => console.log(message.sid));
  }
}