const express = require('express');
const router = express.Router();
const receptions = require('../models/Reception.js');
const winston = require('../routes/logger'); // winston log 설정
module.exports = {
    initView : function (req,res,next){ //model의 doLoading 호출
        receptions.doInit().then((result)=>{
            winston.info(" : receptions");
            res.render('reception');
        }).catch(function(e){
            console.log(e);
            return e;
        });
    }
}
