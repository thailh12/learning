var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
var User = require('./user.model');

var db = 'mongodb://localhost:27017/user';
var port = 8080;
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send('hello');
});

app.get('/users', function(req, res) {      //get all user
  User.find({})
  .exec(function(err, users) {
    if (err) {
      res.send('error');
    } else {
      console.log(users);
      res.json(users);
    }
  });
})

app.listen(port, function() {
  console.log('App listening on port ' + port);
});
