'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true, 
    required: true
  }, 
  passwordHash: {
    type: String, 
    required: true
  },
  role: {
    type: String,
    enum : ['ADMIN', 'STUDENT']
  }
});

module.exports = mongoose.model('User', schema);
