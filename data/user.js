exports.get = function(userId, callback){
  pool.query('SELECT * FROM `user` WHERE `user_id` = ?', [userId], function(error, results, fields){
    callback(error, results[0]);
  });
}

exports.getByUsername = function(userName, callback){
  pool.query('SELECT * FROM `user` WHERE `username` = ?', [userName], function(error, results, fields){
    callback(error, results[0]);
  });
}

exports.insert = function(userObject, callback){
  pool.query('INSERT INTO user SET ?', userObject, function(error, results, fields){
    callback(error, results);
  })
}
