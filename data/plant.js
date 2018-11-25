exports.getAll = function(done){
  pool.query('SELECT * FROM plant', function(error, results, fields){
    done(error, results);
  });
}

exports.insert = function(plantObject, done){
  pool.query('INSERT INTO plant SET ?', plantObject, function(error, results, fields){
    done(error, results);
  })
}
