const express = require('express');
const router = express.Router();
const askFinds = require('../models/AskFind.js');
const winston = require('../routes/logger'); // winston log 설정
module.exports = {
    initView : function (req,res,next){ //model의 doLoading 호출
        askFinds.doInit().then((result)=>{
            winston.info(" : askFinds");
            res.render('askFind');
        }).catch(function(e){
            console.log(e);
            return e;
        });
    }
}
