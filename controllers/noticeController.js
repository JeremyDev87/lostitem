const express = require('express');
const router = express.Router();
const notices = require('../models/notice.js');
const winston = require('../routes/logger'); // winston log 설정
module.exports = {
    initView : function (req,res,next){ //model의 doLoading 호출
        notices.doInit().then((result)=>{
            winston.info(" : notices");
            res.render('notice');
        }).catch(function(e){
            console.log(e);
            return e;
        });
    }
}
