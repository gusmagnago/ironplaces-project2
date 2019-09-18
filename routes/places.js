'use strict';

const { Router } = require('express');
const router = Router();
const Places = require('./../models/places');
const User = require('./../models/user');


router.get('/create',(req, res, next) => {
  res.render('create');
});

router.post('/places', (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const zip = req.body.zip;
  const description = req.body.description;
  
  Places.create({
    name,
    address,
    city,
    zip,
    description
  })
  .then(places => {
    console.log('a place were created', places);
  })
  .catch(error => {
    console.log('an error occuried trying to create a place', error);
  });
  res.redirect('/places');
});

router.get('/places', (req, res, next) => {
  Places.find()
  .then(places => {  
    res.render('places', {places});
  })
  .catch(error => {
    console.log(error);
  });
});

/* router.get('/find-places', (req, res, next) => {
  User.findById(req.session.user._id)
  .then((user) => {
    console.log(user);
    
    res.render('find-places', user);
  })
  .catch((error) => {
    console.log(error);
  });
}); */

router.get('/edit-place/:id',(req, res, next) => {
  const id = req.params.id;
  Places.findById(id)
  .then((places) => {
    res.render('edit-place', places);
  })
  .catch(error => {
    console.log("there was an error here!!!", error);
  });
});

/* router.get('/edit-place', (req, res, next) => {
  Places.findById()
  .then((places) => {
    res.render('edit-place', places);
  })
  .catch(error => {
    console.log("there was an error here!!!", error);
  });
}); */

router.post('/edit-place/:id', (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const zip = req.body.zip;
  const description = req.body.description;
  const type = req.body.type;
  
  Places.findByIdAndUpdate(id, {
    name,
    address,
    city,
    zip,
    description,
    type
  })
  .then(places => {
    console.log('your places has been edited', places);
    res.redirect('/places');
  })
  .catch(error => {
    console.log('error trying to edit', error);
  });
});

module.exports = router;
