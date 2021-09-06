var express = require('express');
var router = express.Router();
const winston = require('./logger'); // winston log 설정
const qnaController = require('../controllers/qnaController');

router.get('/', qnaController.initView);

module.exports = router;
