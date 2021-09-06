const express = require('express');
const router = express.Router();
const qnas = require('../models/Qna.js');
const winston = require('../routes/logger'); // winston log 설정
module.exports = {
    initView : function (req,res,next){ //model의 doLoading 호출
        qnas.doInit().then((result)=>{
            winston.info(" : qnas");
            res.render('qna');
        }).catch(function(e){
            console.log(e);
            return e;
        });
    }
}
