class BaseModel {
  constructor(tableName, map, json){
    this.tableName = tableName;
    this.map = map || {};
    this.data = {};
    this.fromJSON(json);
  }

  getMap(){
    return this.map;
  }

  fromJSON(json){
    if(typeof json !== "object") json = {};
    for(var objKey in this.map){
      this.data[objKey] = json[objKey];
    }
    this.data[this.tableName + "ID"] = (json[this.tableName + "ID"] || null);
    return this;
  }

  toJSON(){
    var json = {};
    for(var objKey in this.map){
      json[objKey] = this.data[objKey];
    }
    json[this.tableName + "ID"] = (this.data[this.tableName + "ID"] || null);
    return json;
  }

  fromDB(dbObj){
    if(typeof dbObj !== "object") dbObj = {};
    for(var objKey in this.map){
      var dbCol = this.map[objKey];
      this.data[objKey] = dbObj[dbCol];
    }
    this.data[this.tableName + "ID"] = dbObj[this.tableName + "_id"];
    return this;
  }

  toDB(){
    var dbObj = {};
    for(var objKey in this.map){
      var dbCol = this.map[objKey];
      dbObj[dbCol] = this.data[objKey];
    }
    dbObj[this.tableName + "_id"] = (this.data[this.tableName + "ID"] || null);
    return dbObj;
  }
}

module.exports = BaseModel;
