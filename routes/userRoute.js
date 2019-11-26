'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.user_list_get);

router.get('/user/:id', userController.user_get);

router.post('/user', (req, res) => {
  res.send('With this endpoint you can add users.');
});

router.put('/user', (req, res) => {
  res.send('With this endpoint you can edit users.');
});

router.delete('/user', (req, res) => {
  res.send('With this endpoint you can delete users.');
});

module.exports = router;