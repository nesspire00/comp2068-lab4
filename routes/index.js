const express = require('express');
const controller = require('../controllers/indexController');

const router = express.Router();

/* GET pages */
router.get('/', controller.me);
router.get('/yulia', controller.yulia);
router.get('/artem', controller.artem);
router.get('/daria', controller.daria);

module.exports = router;
