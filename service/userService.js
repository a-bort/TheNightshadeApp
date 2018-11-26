var user = require('../data/user.js');
var bcrypt = require('bcrypt');

exports.get = function(userId, done){
  user.get(userId, done);
}

exports.getByUsername = function(userName, done){
  user.getByUsername(userName, done);
}

exports.register = function(username, password, callback){
  bcrypt.hash(password, 10, function(err, hash){
    if(err){ callback(err); return; }
    var userJSON = { username: username, password: hash, admin: 0 };
    user.insert(userJSON, function(err, results){
      if(err){ return callback(err); }
      exports.get(results.insertId, callback);
    });
  })
}
