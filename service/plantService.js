var plant = require('../data/plant.js')

exports.getAll = function(done){
  plant.getAll(done);
}

exports.addPlant = function(plantData, done){
  plant.insert(plantData, done);
}
