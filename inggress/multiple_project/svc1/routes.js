const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => res.send('Hello from home v1 controller'));
router.get('/others', (req, res) => res.send('Hello from others v1 controller'));

module.exports = router;