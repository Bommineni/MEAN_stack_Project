
module.exports = function(){
  var mongoose = require("mongoose");
  var WebsiteSchema = mongoose.Schema({
    _website : {type : mongoose.Schema.ObjectId, ref:"Website"},
    name : {type : String, required: true},
    title : String,
    description : String,
    widgets : [{type : mongoose.Schema.Types.ObjectId, ref:"Widget"}],
    dateCreated: {type: Date, default : Date.now}
  },{collection : "server.website"});

  return WebsiteSchema;
}
