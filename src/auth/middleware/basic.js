const base64 = require('base-64');
const UserModelIns = require('../models/users-model.js');


module.exports = (req, res, next) => {
  console.log('headerAuth' ,req.headers.authorization);
  let basic = req.headers.authorization.split(' ').pop();
  const [user, pass] = base64.decode(basic).split(':');
  req.username = user,
  req.password = pass;
  return UserModelIns.authenticateBasic(user, pass).then((validUser)=> {
    req.token = UserModelIns.generateToken(validUser);
    next();
  }).catch(err=> next(err));
};