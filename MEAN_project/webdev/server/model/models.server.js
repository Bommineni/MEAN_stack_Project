
module.exports = function(){

  var models = {
    userModel : require("./user/user.model.server")(),
    pageModel: require("./page/page.model.server")(),
    websiteModel : require("./website/website.model.server")(),
    widgetModel: require("./widget/widget.model.server")()
  };

  return models;
}

