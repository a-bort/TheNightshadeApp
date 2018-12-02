var shared = require("./sharedRoute.js");
var plantService = require("../service/plantService.js");

module.exports = function(app){
  app.get('/plants/add', shared.requireAdmin, function(req, res){
    res.render('plants/add');
  });

  app.post('/plants/add', shared.requireAdmin, function(req, res){
    plantService.addPlant(req.body)
    .catch(function(e){
      console.log(e);
    }).finally(function(){
      return shared.defaultRedirect(res);
    });
  });

  app.get('/plants/random', function(req, res){
    plantService.getRandom().then(function(plant){
      res.render('plants/random', {plant: plant});
    }).catch(function(error){
      res.render('plants/random', {value: error.message});
    });
  });
}
