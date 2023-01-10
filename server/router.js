const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/habits', controllers.getHabits);

router.get('/habits/:id', controllers.getHabit);

router.post('/habits', controllers.post);

router.put('/habits', controllers.update);

module.exports = router;