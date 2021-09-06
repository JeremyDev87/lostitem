var express = require('express');
var router = express.Router();
const winston = require('./logger'); // winston log 설정
const lostLawController = require('../controllers/lostLawController');

router.get('/', lostLawController.initView);

module.exports = router;
