const express = require('express');
const router = express.Router();
const lostLaws = require('../models/LostLaw.js');
const winston = require('../routes/logger'); // winston log 설정
module.exports = {
    initView : function (req,res,next){ //model의 doLoading 호출
        lostLaws.doInit().then((result)=>{
            winston.info(" : lostLaws");
            res.render('lostLaw');
        }).catch(function(e){
            console.log(e);
            return e;
        });
    }
}
