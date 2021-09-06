const express = require('express');
const router = express.Router();
const lostLists = require('../models/LostList.js');
const winston = require('../routes/logger'); // winston log 설정
module.exports = {
    initView : function (req,res,next){ //model의 doLoading 호출
        lostLists.doInit().then((result)=>{
            winston.info(" : lostLists");
            res.render('lostList');
        }).catch(function(e){
            console.log(e);
            return e;
        });
    }
}
