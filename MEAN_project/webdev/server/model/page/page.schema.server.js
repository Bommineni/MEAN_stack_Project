
module.exports = function(){
  var mongoose = require("mongoose");

  var PageSchema = mongoose.Schema({
    _user : {type: mongoose.Schema.ObjectId, ref:"user"},
    name : {type : String, required:true},
    description : String,
    pages : [{type: mongoose.Schema.Types.ObjectId, ref:'Page'}],
    dateCreated: {type: Date, default : Date.now}
  });{collection : "server.page"}

  return PageSchema;
};
