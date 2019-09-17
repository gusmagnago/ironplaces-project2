'use strict';

const mongoose = require('mongoose');

const placesSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  }, 
  address: {
    type: String, 
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Places', placesSchema);