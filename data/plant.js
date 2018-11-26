var PlantModel = require("../dataModel/PlantModel.js");

exports.getAll = function(done){
  pool.query('SELECT * FROM plant', function(err, results, fields){
    if(err){ return done(err); }
    var all = [];
    for(var i = 0; i < results.length; i++){
      all.push(new PlantModel().fromDB(results[i]).toJSON());
    }
    done(err, all);
  });
}

exports.insert = function(plantJSON, done){
  pool.query('INSERT INTO plant SET ?', new PlantModel(plantJSON).toDB(), function(err, results, fields){
    done(err, results);
  })
}
