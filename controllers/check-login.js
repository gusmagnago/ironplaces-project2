'use strict';

module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/sign-in');
  } else {
    next();
  }
};