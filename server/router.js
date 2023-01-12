const router = require('express').Router();
const controllers = require('./controllers.js');
const { sendMessage } = require('../helpers/twilio.js');
const { scheduleHabit } = require('../helpers/scheduler.js');

router.get('/habits', controllers.getHabits);

router.get('/habits/:id', controllers.getHabit);

router.post('/habits', controllers.post);

router.put('/habits', controllers.update);

router.put('/sendMessage', (req, res) => {
  sendMessage();
  res.status(204).send();
})

router.put('/schedule', (req, res) => {
  scheduleHello();
  res.status(204).send();
})

module.exports = router;