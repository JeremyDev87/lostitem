var express = require('express');
var router = express.Router();
const winston = require('./logger'); // winston log 설정
const loginController = require('../controllers/loginController');

router.get('/', loginController.initView);

module.exports = router;
