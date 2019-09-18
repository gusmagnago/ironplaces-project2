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
<<<<<<< HEAD
    enum: ['restaurants', 'drink and dance', 'useful']
  },
  location: {
    type: {
      type: String, 
      coordinates: [Number]
    }
=======
    enum: ['restaurants', 'drink-dance', 'useful']
>>>>>>> 63ed9ad8899e9062c319cfa1b19cee4014d07a65
  }
});

placesSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('Places', placesSchema);

