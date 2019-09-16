'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true, 
    required: true,
    unique: true
  }, 
  passwordHash: {
    type: String, 
    required: true
  }, 
 // to put more info later
  cohort: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('User', schema);
