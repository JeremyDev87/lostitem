var express = require('express');
var router = express.Router();
const winston = require('./logger'); // winston log 설정
const askFindController = require('../controllers/askFindController');

router.get('/', askFindController.initView);

module.exports = router;
