
module.exports = function(){

  var mongoose = require("mongoose");
  var WidgetSchema = require("./widget.schema.server");
  var Widget = mongoose.model("Widget", WidgetSchema);

  var api = {
    createWidget: createWidget,
    findAllWidgetsForPage: findAllWidgetsForPage,
    findWidgetById: findWidgetById,
    updateWidget: updateWidget,
    deleteWidget: deleteWidget,
    recordWidget: recordWidget
  }
  return api;

  function createWidget(pageId, widget){
    widget._page = pageId;
    return Widget.create(widget);
  }

  function findAllWidgetsForPage(pageId){
    return Widget.find({_page: pageId});
  }

  function findWidgetById(widgetId){
    return Widget.findById({widgetId});

  }

  function updateWidget(widgetId, widget){
    delete Widget._id;
    return Widget
      .update({_id: widgetId},{
          $set: widget}
      );
  }

  function deleteWidget(widgetId) {
    return Widget.remove({_id: widgetId})

  }

  function recordWidget(pageId, start, end){

  }


}
