'use strict';

module.exports = (req, res, next) => {
  if (req.session.user) {
    console.log('this should be the user:', req.session.user);
    res.redirect('/find-places');
  } else {
    next();
  }
};