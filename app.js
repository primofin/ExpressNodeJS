'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cat = require('./routes/catRoute.js');
const user = require('./routes/userRoute');
const cors = require('cors');
const bodyParser = require('body-parser');



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', cat);
app.use('/',user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

