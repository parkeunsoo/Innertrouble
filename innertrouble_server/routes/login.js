var express = require('express');
var router = express.Router();
const models = require('../models')
const crypto = require('crypto');
const jwt = require("jsonwebtoken");


// Sign Up
router.post("/signup",function(req,res,next){
  let user = req.body.user;
  let password = user.password;
  let salt = Math.round((new Date().valueOf()*Math.random()))+"";
  let encryptedPW=crypto.createHash('sha512').update(password+salt).digest("hex");
  console.log(encryptedPW)
  simplePW=encryptedPW.substr(0,29)
  console.log(simplePW)
  models.user.create({
    id:user.id,
    password:simplePW,
    salt:salt
  }).then(result =>{
    console.log("회원가입을 완료했습니다");
    res.json({
      message:'success'
    })
  }).catch(err => {
    console.log(err);
    res.json({
      message:'fail'
    })
  })
});

// Sign In
router.post("/signin", async function(req,res,next){
  let user = req.body.user;
  const secret = req.app.get('jwt-secret');
  const token = jwt.sign({
            id: user.id
        }, 
        secret,{
            expiresIn: '1h',
            issuer: 'parkeunsoo',
        })

  let info = await models.user.findOne({
    where:{
      id : user.id
    }
  }).catch(err =>{
    console.log("회원이 없습니다.");
  });

  let DBpassword = info.dataValues.password;
  let salt = info.dataValues.salt;
  let inputPassword = user.password;
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");
  let simPW=hashPassword.substr(0,29)
  if(DBpassword == simPW){
    console.log('로그인에 성공하셨습니다.');
    res.json({
      token: token,
      message: 'success'
    })
  }
  else{
    console.log('로그인에 실패하셨습니다.')
    res.json({
      message:'fail'
    })
  }
});


module.exports = router;
