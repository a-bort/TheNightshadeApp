var UserModel = require("../dataModel/UserModel.js");

exports.get = function(userId, done){
  pool.query('SELECT * FROM `user` WHERE `user_id` = ?', [userId], function(error, results, fields){
    done(error, new UserModel().fromDB(results[0]).toJSON());
  });
}

exports.getByUsername = function(userName, done){
  pool.query('SELECT * FROM `user` WHERE `username` = ?', [userName], function(error, results, fields){
    done(error, new UserModel().fromDB(results[0]).toJSON());
  });
}

exports.insert = function(userJSON, done){
  pool.query('INSERT INTO user SET ?', new UserModel(userJSON).toDB(), function(error, results, fields){
    done(error, results);
  })
}
