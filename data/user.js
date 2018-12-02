var UserModel = require("../dataModel/UserModel.js");

exports.get = function(userId){
  return pool.queryAsync('SELECT * FROM `user` WHERE `user_id` = ?', [userId]).then(function(results, fields){
    return new UserModel().fromDB(results[0]).toJSON()
  });
};

exports.getByUsername = function(userName, done){
  return pool.queryAsync('SELECT * FROM `user` WHERE `username` = ?', [userName]).then(function(results, fields){
    return new UserModel().fromDB(results[0]).toJSON();
  });
};

exports.insert = function(userJSON){
  return pool.queryAsync('INSERT INTO user SET ?', new UserModel(userJSON).toDB()).then(function(results, fields){
    return results.insertId;
  });
};
