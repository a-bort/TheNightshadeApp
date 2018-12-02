var PlantModel = require("../dataModel/PlantModel.js");

exports.getAll = function(){
  return new Promise(function(resolve, reject){
    pool.query('SELECT * FROM plant', function(err, results, fields){
      if(err){ return reject(err); }
      var all = [];
      for(var i = 0; i < results.length; i++){
        all.push(new PlantModel().fromDB(results[i]).toJSON());
      }
      resolve(all);
    });
  });
}

exports.insert = function(plantJSON, done){
  return pool.queryAsync('INSERT INTO plant SET ?', new PlantModel(plantJSON).toDB()).then(function(results, fields){
    return results.insertId;
  });
}
