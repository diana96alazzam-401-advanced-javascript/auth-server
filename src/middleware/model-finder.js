'use strict';

// require user model
const userModel = require('../auth/models/users-model.js');

function getModel(req, res, next) { 
  const model = req.params.model;
  switch (model){
  case 'signin':
    req.model = userModel;
    next();
    return;
  case 'signup':
    req.model = userModel;
    next();
    return;
  case 'oauth':
    req.model = userModel;
    next();
    return;
  default: 
    next('invalid model');
    return;
  }
}

module.exports = getModel;