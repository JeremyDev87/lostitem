var express = require('express');
var router = express.Router();
const winston = require('./logger'); // winston log 설정
const lostListController = require('../controllers/lostListController');

router.get('/', lostListController.initView);

module.exports = router;
