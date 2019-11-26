'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cat = require('./routes/catRoute.js');
const user = require('./routes/userRoute');


app.use('/', cat);
app.use('/',user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

