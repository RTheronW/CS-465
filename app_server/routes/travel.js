const express = require('express');
const router = express.Router();
const controler = require('../controllers/travel');

/* GET home page. */
router.get('/', controler.travel);

module.exports = router;