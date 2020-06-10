'use strict';
require('dotenv').config();
const userSchema = require('./user.schema.js');
const Model = require('./mongo.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'mysecret';

// Regular users can READ
// Writers can READ and CREATE
// Editors can READ, CREATE, and UPDATE
// Administrators can READ, CREATE, UPDATE, and DELETE

const roles = {
  user: ['read'],
  writer:['read', 'create', 'update'],
  admin: ['read', 'create', 'update', 'delete'],
};

class UserModel extends Model {
  constructor() {
    super(userSchema);
  }
  save(record){
    return this.get({username:record.username}).then((result)=> {
      if (result.length === 0){
        return bcrypt.hash(record.password, 5).then((hash)=> {
          record.password = hash;
        }).then(()=> {
          return this.create(record).then((created)=>{
            return created;
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
  generateToken (user) {
    console.log(user.role);
    // capabilities === roles[user.role] ===== ['read'] OR ['read', 'create', 'update'];
    const userData = {
      exp: Math.floor(Date.now() / 1000) + (15 * 60),
      algorithm: 'ES384',
      username: user.username,
      id: user._id,
      capabilities: roles[user.role],
    };
    const token =  jwt.sign(userData, SECRET);
    return token;
  }
  authenticateToken (token){
    const tokenObject = jwt.verify(token, SECRET);

    return this.get({_id:tokenObject.id}).then((result)=> {
      if (result.length === 0){
        console.log('User id doesn"t exists');
        return Promise.reject('User ID is not found!');
      } else {
        console.log('User ID already exists', tokenObject);
        return Promise.resolve(result[0]);
      }
    });    
  }
}

module.exports = new UserModel(userSchema);