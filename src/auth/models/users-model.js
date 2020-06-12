'use strict';
require('dotenv').config();
const userSchema = require('./user.schema.js');
const Model = require('./mongo.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'mysecret';


class UserModel extends Model {
  constructor() {
    super(userSchema);
  }
  save(record) {
    return this.get({ username: record.username }).then((result) => {
      if (result.length === 0) {
        return bcrypt.hash(record.password, 5).then((hash) => {
          record.password = hash;
        }).then(() => {
          return this.create(record).then((created) => {
            return created.populate('acl').execPopulate();
          });
        });
      } else {
        console.log('username already exists');
      }
    });
  }
  authenticateBasic (user, pass) {
    console.log('before', {username:user});
    return this.get({username:user}).then((result)=> {
      return bcrypt.compare(pass, result[0].password).then((valid)=> {
        return valid ? result : Promise.reject('wrong password');
      });
    });
  }
  generateToken(user) {
    // capabilities === roles[user.role] ===== ['read'] OR ['read', 'create', 'update'];
    const userData = {
      exp: Math.floor(Date.now() / 1000) + (15 * 60),
      algorithm: 'ES384',
      username: user.username,
      id: user._id,
      capabilities: user.acl ? user.acl.capabilities : [],
      type: user.type || 'user',
    };
    const token = jwt.sign(userData, SECRET);
    return token;
  }
  authenticateToken(token) {
    try {
      let tokenObject = jwt.verify(token, SECRET);
      return this.get({ _id: tokenObject.id });
    } catch (e) {
      throw new Error('Invalid Token');
    }
  }

  can(user, capability) {
    return user.acl.capabilities.includes(capability);
  }
}

module.exports = new UserModel(userSchema);