'use strict';

require('dotenv').config();

const User = require('./../models/user');
const database = require('./database');

const URI = process.env.MONGODB_URI;

database.connect('mongodb://127.0.0.1:27017/ironplaces-database')
  .then(() => {
    return User.create({ email: 'ironhacklisbon@ironhacklisbon.com', role: 'ADMIN', passwordHash: 'ironplaces'});
  })
  .then(user => {
    console.log('the admin user is working', user);
  })
  .then(() => database.disconnect())
  .catch(error => {
    console.log(`ERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERROR ${ URI }`, error);
    process.exit(1);
  });
