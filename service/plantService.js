var plant = require('../data/plant.js')

exports.getAll = function(pool, callback){
  plant.getAll(pool, callback);
}
