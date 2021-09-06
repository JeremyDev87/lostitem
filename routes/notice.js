var express = require('express');
var router = express.Router();
const winston = require('./logger'); // winston log 설정
const noticeController = require('../controllers/noticeController');

router.get('/', noticeController.initView);

module.exports = router;
