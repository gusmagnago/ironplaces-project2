'use strict';

const { Router } = require('express');
const router = Router();
const Places = require('./../models/places');
const User = require('./../models/user');


// ----------- CREATE PLACES ROUTE --------------

router.get('/create',(req, res, next) => {
  res.render('create');
});

router.post('/find-places', (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const zip = req.body.zip;
  const description = req.body.description;
  const category = req.body.category;
  const link = req.body.link;
  
  Places.create({
    name,
    address,
    city,
    zip,
    description, 
    category, 
    link
  })
  .then(places => {
    console.log('a places was updated', places);

    User.findByIdAndUpdate(req.session.user._id, {
     $push: {_createdPlaces: places._id}
    })
    .then((user)=> {
      console.log('a user was updated', user);
      res.redirect('/find-places');
    })
    .catch(error => {
      console.log('an error occuried trying to update a user', error);
    });
  })
  .catch(error => {
    console.log('an error occuried trying to create a place', error);
  });
});

// ----------- END OF CREATE PLACES ROUTES--------------


 // ----------- FIND PLACES ROUTE --------------

router.get('/find-places',(req, res, next) => {
  Places.find()
  .then(places => {  
    res.render('find-places', {places});
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/find-places/:category',(req, res, next) => {
  const category = req.params.category;
  Places.find({category: category})
  .then(places => {  
    console.log(places);
    res.render('find-places', {places});
  })
  .catch(error => {
    console.log(error);
  });
});

// ----------- END OF FIND PLACES ROUTES--------------


 // ----------- EDIT PLACES ROUTE --------------

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

router.get('/find-places/:category.restaurants', (req, res, next) => {
  const category = req.paramas.gategory.restaurants;
  Places.find(category)
  .then((places) => {
    res.render('restaurants', places);
  })
  .catch(error => {
    console.log('you have an error here!', error);
  });
});

router.post('/edit-place/:id', (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const zip = req.body.zip;
  const description = req.body.description;
  const category = req.body.category;
  
  Places.findByIdAndUpdate(id, {
    name,
    address,
    city,
    zip,
    description,
    category
  })
  .then(places => {
    console.log('your places has been edited', places);
    res.redirect('/find-places');
  })
  .catch(error => {
    console.log('error trying to edit', error);
  });
});
 // ----------- END OF EDIT PLACES ROUTES--------------


// ----------- DELETE PLACE ROUTE --------------
router.get('/delete-place/:id', (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const zip = req.body.zip;
  const description = req.body.description;
  const category = req.body.category;
  
  Places.findByIdAndDelete(id, {
    name,
    address,
    city,
    zip,
    description,
    category
  })
  .then(places => {
    console.log('weel done!', places);
    res.render('delete-place');
  })
  .catch(error => {
    console.log('there was an error when you tried to delete', error);
  });
});

module.exports = router;
