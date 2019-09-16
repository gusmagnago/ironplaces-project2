'use strict';

const { Router } = require('express');
const router = Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');

router.get('/', (req, res, next) => {
  res.render('user', { name: 'James Dean' });
});

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

/* router.post('/sign-in', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;


}) */

module.exports = router;
