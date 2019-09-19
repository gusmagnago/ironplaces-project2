'use strict';

const mongoose = require('mongoose');
const Object = mongoose.Schema.Types.ObjectId;


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
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
  _createdPlaces: [{
    type: Object,
    ref: "Places"
  }],
  role: {
    type: String,
    enum : ['ADMIN', 'STUDENT']
  }
});

module.exports = mongoose.model('User', schema);
