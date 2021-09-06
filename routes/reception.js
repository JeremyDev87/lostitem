var express = require('express');
var router = express.Router();
const winston = require('./logger'); // winston log 설정
const receptionController = require('../controllers/receptionController');

router.get('/', receptionController.initView);

module.exports = router;
