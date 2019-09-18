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
    enum: ['restaurants', 'drink and dance', 'useful']
  }, 
  link: {
    type: String
  }
});

placesSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('Places', placesSchema);

