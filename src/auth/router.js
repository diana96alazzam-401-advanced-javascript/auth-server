'use strict'; 
const express = require('express');
const UserModelIns = require('../auth/models/users-model');
const basicAuth = require('./middleware/basic.js');
const oauth = require('./middleware/oauth.js');


const router = express.Router();
// router.param('model', getModel);

router.post('/signup', signUpHandler);
router.post('/signin', basicAuth, signInHandler);
router.get('/users', usersHandler);
router.get('/oauth', oauth, oauthHandler);


function signUpHandler(req, res){
  UserModelIns.save(req.body).then((data) => { //save or create?
    req.token = UserModelIns.generateToken(data);
    req.user = {
      username: data.username,
      acl: data.acl,
    };
    res.cookie('auth', req.token);
    res.set('auth', req.token);
    console.log(req.user);
    res.json({user: req.user, token: req.token});        
  }).catch((err) => res.status(403).send('Error in sign up!!'));
}

function signInHandler(req, res){
  res.cookie('auth', req.token);
  res.set('auth', req.token);
  return res.json({user: req.username, token:req.token});  
}

function usersHandler(req, res){
  return UserModelIns.get().then((list)=> {
    return res.json(list);
  });
}
function oauthHandler(req, res){
  res.json({ token: req.token });
}


module.exports = router;