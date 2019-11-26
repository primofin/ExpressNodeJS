'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cat = require('./routes/catRoute.js');

app.use('/', cat);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

