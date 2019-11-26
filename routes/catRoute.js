'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.get('/cat', catController.cat_list_get);

router.get('/cat/:id', catController.cat_get);

router.post('/cat', (req, res) => {
  res.send('With this endpoint you can add cats.');
});

router.put('/cat', (req, res) => {
  res.send('With this endpoint you can edit cats.');
});

router.delete('/cat', (req, res) => {
  res.send('With this endpoint you can delete cats.');
});

module.exports = router;