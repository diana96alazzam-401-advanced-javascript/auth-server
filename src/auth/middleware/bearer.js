'user strict';
const usersModel = require('../models/users-model.js');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    next('Invalid Login no auth headers');
    return;
  } else {
    let [auth, token] = req.headers.authorization.split(' ');
    if (auth === 'Bearer') {
      usersModel
        .authenticateToken(token)
        .then((validUser) => {
          req.user = {
            username: validUser[0].username,
            acl: validUser[0].acl,
            capabilities: validUser[0].acl.capabilities,
          };
          req.token = token;
          next();
        })
        .catch((e) => next('Invalid login'));
    } else {
      next('Invalid auth header');
    }
  }
};
