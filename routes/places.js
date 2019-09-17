'use strict';

const { Router } = require('express');
const router = Router();
const Places = require('./../models/places');


router.get('/places', (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;
  const description = req.body.description
})

module.exports = router;
