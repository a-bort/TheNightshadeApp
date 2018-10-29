
/*
 * GET home page.
 */
module.exports = function(app, pool){

  var plantService = require('../service/plantService.js');

  app.get('/', function(req, res){
    plantService.getAll(pool, function(plants, err){
      if(err || !plants){
        console.log(err);
      }
      res.render('index', {title: "Plants", plants: plants});
    });
  });
}
