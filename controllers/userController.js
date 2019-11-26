'use strict';
// userController
const userModel = require('../models/userModel.js');

const users = userModel.users;

const user_list_get = (req, res) => {
    console.log(users);
    for(let i = 0 ; i < users.length; i ++){
        delete users[i].password;
    };
    console.log(users);//After delete the user's password
    res.json(users);
};

const user_get = (req, res) => {
    const user = (users.filter(user => user.id == req.params.id));
    delete user[0].password;
    console.log(user[0]);
    res.json(users.filter(user => user.id == req.params.id));
};

module.exports = {
  user_list_get,
  user_get,
};