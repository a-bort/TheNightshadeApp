var BaseModel = require('./BaseModel.js');

class UserModel extends BaseModel {
  constructor(json){
    super("user",
    {
      username: "username",
      password: "password",
      admin: "admin"
    }, json);
  }
}

module.exports = UserModel;
