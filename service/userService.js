var user = require('../data/user.js');
var bcrypt = Promise.promisifyAll(require('bcrypt'));

exports.get = function(userId){
  return user.get(userId);
}

exports.getByUsername = function(userName){
  return user.getByUsername(userName);
}

exports.register = function(username, password, callback){
  return bcrypt.hash(password, 10)
  .then(function(hash){
    var userJSON = { username: username, password: hash, admin: 0 };
    return user.insert(userJSON);
  }).then(exports.get);
}
