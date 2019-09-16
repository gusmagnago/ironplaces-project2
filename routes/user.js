'use strict';

const { Router } = require('express');
const router = Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');


router.get('/', (req, res, next) => {
  res.render('sign-in');
  // res.redirect('sign-in');
});


router.get('/sign-up', (req, res, next) => {
  res.render('sign-up');
});

router.post('/sign-up', (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, 10)
    .then(hash => {
      return User.create({
        username,
        email,
        passwordHash: hash
      });
    })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.redirect('/');
    })
    .catch(error => {
      console.log('There was an error in the sign up process.', error);
    });
});

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

router.post('/sign-in', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  
  let auxUser;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.redirect('error');
      } else {
        auxUser = user;
        return bcrypt.compare(password, user.passwordHash);
      }
    })
    .then(matches => {
      if (!matches) {
        res.redirect('error');
      } else {
        req.session.user = {
          _id: auxUser._id
        };
        res.redirect('dashboard');
      }
    })
    .catch(error => {
      console.log('signin signup error', error);
      next(error);
    });
});

router.get('/dashboard', /* routeGuardMiddleware, */ (req, res, next) => {
  res.render('dashboard');
});

router.get('/create', (req, res, next) => {
  res.render('create');
});



router.post('sign-ou', (req, res, next) => {
  req.session.destroy();
  res.redirect('/sign-in');
});

module.exports = router;
