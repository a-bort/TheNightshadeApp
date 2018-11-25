var user = require('../data/user.js');
var bcrypt = require('bcrypt');

exports.get = function(userId, callback){
  user.get(userId, callback);
}

exports.getByUsername = function(userName, callback){
  user.getByUsername(userName, function(err, user){
    if(err){ callback(err); return; }
    callback(null, user);
  });
}

exports.register = function(username, password, callback){
  bcrypt.hash(password, 10, function(err, hash){
    if(err){ callback(err); return; }
    var userObject = { username: username, password: hash, admin: 0 };
    user.insert(userObject, function(err, results){
      if(err){ return callback(err); }
      exports.get(results.insertId, callback);
    });
  })
}
