var plant = require('../data/plant.js')

exports.getAll = function(done){
  plant.getAll(done);
}

exports.addPlant = function(plantJSON, done){
  plant.insert(plantJSON, done);
}
