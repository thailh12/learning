var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  isLogIn: bool,
});

module.export = mongoose.model('User', UserSchema);
