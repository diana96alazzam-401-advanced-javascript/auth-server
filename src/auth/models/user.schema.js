'use strict';

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const roles = require('./roles.schema.js');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  password: {type: String, required: true},
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'writer', 'admin'],
  },
},
{toObject:{virtuals:true}, toJSON:{virtuals:true}});

userSchema.virtual('acl', {
  ref:'roles',
  localField:'role',
  foreignField: 'role',
  justOne: true,
});

module.exports = mongoose.model('users', userSchema);