var shared = require("./sharedRoute.js");
var plantService = require("../service/plantService.js");

module.exports = function(router){

  router.get('/plants/get', function(req, res){
    plantService.getAll().then(function(plants){
      res.json({plants: plants});
    }).catch(function(e){
      console.log(e);
      res.json({plants: [], error: "Unable to retrieve plants"});
    });
  });

  router.post('/plants/add', shared.requireAdmin, function(req, res){
    plantService.addPlant(req.body)
    .then(function(){
      shared.defaultSuccess(res, "Plant added successfully");
    })
    .catch(function(e){
      res.json({error: "Unable to add plant"});
    });
  });

  router.get('/plants/random', function(req, res){
    plantService.getRandom().then(function(plant){
      res.json({plant: plant});
    }).catch(function(error){
      res.json({value: error.message});
    });
  });
}
