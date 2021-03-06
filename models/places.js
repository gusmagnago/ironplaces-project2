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
    required: true,
    enum: ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Miami', 'México City', 'Paris', 'São Paulo']
  },
  contact: {
    type: String,
    trim: true
  },
  description: {
     type: String
  }, 
  category: {
    type: String, 
    enum: ['restaurants', 'drink-dance', 'useful']
  }, 
  link: {
    type: String
  }
});

module.exports = mongoose.model('Places', placesSchema);

