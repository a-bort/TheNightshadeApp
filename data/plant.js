exports.getAll = function(pool, callback){
  pool.query('SELECT * FROM plant', function(error, results, fields){
    callback(results, error);
  });
}
