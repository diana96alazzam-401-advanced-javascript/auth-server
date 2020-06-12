'use strict';

const mongoose = require('mongoose');

const user = mongoose.Schema({
  username: { type: String, required: true},
  password: {type: String, required: true},
  role: {
    type: String,
    default: 'user',
    enum: ['admin', 'writer', 'admin'],
  },
});


module.exports = mongoose.model('user', user);