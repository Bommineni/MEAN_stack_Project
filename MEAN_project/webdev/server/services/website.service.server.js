
module.exports = function(app, models) {

  var websiteModel = models.websiteModel;

  websites =
    [
      {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
      {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
      {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
      {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
      {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
      {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
      {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
    ]


  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  function createWebsite(req, res){
    var website = req.createwebsite;
    websiteModel
      .createWebsite(website)
      .then(
        function(website){
          res.json(website);
        },
        function(error){
          res.statusCode(400).send(error);
        }
      )

  }

  function findAllWebsitesForUser(req,res){
    var userId = req.params.userId;

    websiteModel
      .findAllWebsitesForUser(userId)
      .then(
        function(websites){
          res.json(websites);
        },
        function(error){
          res.statusCode(404).send(error)
        }
      )

  }

  function findWebsiteById(req,res){
    var websiteId = req.params.websiteId;

    websiteModel
      .findWebsiteById(websiteId)
      .then(
        function(website){
          res.json(website);
        },
        function(error){}
      )

  }

  function updateWebsite(req,res){

  }

  function deleteWebsite(req,res){

  }
}
