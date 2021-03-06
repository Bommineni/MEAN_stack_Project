/**
 * Created by sesha on 7/27/17.
 */

/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {

  var models = require("./model/models.server.js")();

  require("./services/user.service.server.js")(app, models);
  require("./services/website.service.server.js")(app, models);
  require("./services/page.service.server.js")(app, models);
  require("./services/widget.service.server.js")(app, models);

  app.get("/say/:something", function(req, res){
    var msg = req.params['something'];
    res.send({message: msg});
  });

};

