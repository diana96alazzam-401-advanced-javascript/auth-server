const base64 = require('base-64');
const UserModelIns = require('../models/users-model.js');


module.exports = (req, res, next) => {
  if(!req.headers.authorization){
    next('Invalid login!');
    return;
  }
  let basic = req.headers.authorization.split(' ').pop();
  let [user, pass] = base64.decode(basic).split(':');
  return UserModelIns.authenticateBasic(user, pass).then((validUser)=> {
    req.user = {
      username: validUser.username,
      acl:validUser.acl,
    };
    req.token = UserModelIns.generateToken(validUser);
    next();
  }).catch(err=> next('Invalid login'));
};