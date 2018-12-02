var plant = require('../data/plant.js')

exports.getAll = function(){
  return plant.getAll();
}

exports.addPlant = function(plantJSON, done){
  return plant.insert(plantJSON);
}

exports.getRandom = function(){
  return plant.getAll().then(function(plants){
    var i = Math.floor(Math.random() * plants.length);
    return plants[i];
  });
}
