//Creating User schema

module.exports = function(){
  var mongoose = require("mongoose");

  var UserSchema = mongoose.Schema({
    username : {type: String, required: true},
    password : String,
    firstName : String,
    lastName : String,
    email : String,
    facebook : {
      token: String,
      id: String,
      displayName : String
    },
    phone : String,
    websites : [{type: mongoose.Schema.Types.ObjectId, ref:'Website'}],
    dateCreated: {type: Date, default : Date.now}
  }, {collection:"server.user"});

  return UserSchema;
}
