'use strict';

const mongoose = require('mongoose');

const placesSchema = new mongoose.Schema({
  // imgURL: {
  //   type: String,
  // }
  name: {
    type: String,
    required: true
  }, 
  address: {
    type: String, 
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  description: {
     type: String
  }, 
  category: {
    type: String, 
    enum: ['restaurants', 'drink-dance', 'useful']
  }
});

module.exports = mongoose.model('Places', placesSchema);

