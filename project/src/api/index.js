var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var User = require('./user.moedel');

var db = 'mongodb://localhost/user';
var port = 8080;
mongoose.connect(db);

hash(pass) { //hash password
  bcrypt.hash(pass, saltRounds, function(err, hash) {
    return hash;
  });
}

checkUserExist(username) { //check username exist
  User.findOne({_username: username}).exec(function(err, user) {
    if (err) {
      return ('user not exist');
    } else {
      return true;
    }
  });
})

User.post("/user", function(req, res) { // create new user
  var newUser = new User();
  newUser.username = req.body.username;
  newUser.password = hash(req.body.password);
  newUser.isLogIn = false;

  newUser.save(function(err, user) {
    if (err) {
      res.send('error saving');
    } else {
      console.log(user);
      res.send(user);
    }
  })
})

User.post('/createuser/:user')
if (req.body.email &&
  req.body.username &&
  req.body.password &&
  req.body.passwordConf) {
  var userData = {
    username: req.body.username,
    password: req.body.password,
    isLogIn: false,
  }
  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      return next(err)
    } else {
      return res.redirect('/profile');
    }
  });
}
