
module.export = function(){
  var mongoose = require("mongoose");

  var WidgetSchema = mongoose.Schema({
    _page : {type: mongoose.schema.ObjectId, ref: "Page"},
    type: {type:String, enum: ['HEADING','IMAGE','YOUTUBE','HTML','INPUT']},
    name : String,
    text : String,
    placeholder : String,
    description : String,
    url : String,
    width :  String,
    height : String,
    rows : Number,
    size : Number,
    class : String,
    icon : String,
    deleteable : Boolean,
    formatted : Boolean,
    dateCreated : {type: Date, default : Date.now}

  },{collection: "server.widget"});

  return WidgetSchema;
}
