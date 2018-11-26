var BaseModel = require('./BaseModel.js');

class PlantModel extends BaseModel {
  constructor(json){
    super("plant",
    {
      plantID: "plant_id",
      commonName: "common_name",
      genus: "genus",
      species: "species"
    }, json);
  }
}

module.exports = PlantModel;
