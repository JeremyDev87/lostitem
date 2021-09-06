const express = require('express');
const router = express.Router();
const logins = require('../models/Login.js');
const winston = require('../routes/logger'); // winston log 설정
module.exports = {
    initView : function (req,res,next){ //model의 doLoading 호출
        logins.doInit().then((result)=>{
            winston.info(" : logins");
            res.render('login');
        }).catch(function(e){
            console.log(e);
            return e;
        });
    }
}
