
module.exports = function(app, models) {

  var pageModel = models.pageModel;
  pages =
    [
      {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
      {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
      {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
    ];

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req,res){
    pageModel
      .createPage(page)
      .then(function(page){
        res.json();
      },
      function(error){
        res.statusCode(400).send(error)
      }
      );
  }

  function findAllPagesForWebsite(req,res){
    var websiteId = req.params.websiteId;
    var page = req.params.page;

    pageModel
      .findAllPagesForWebsite(websiteId,page)
      .then(
        function(page){
          res.json();
        },
        function(error){
          res.statusCode(404).send(error);
        }
      )
  }

  function findPageById(pageId, res){
    pageModel
      .findPageById(pageId)
      .then(
        function(pageId){
          res.json();
        },
        function(error){
          res.statusCode(404).send(error);
        }
      )

  }

  function updatePage(req,res){
    var page = req.params.page;

    pageModel
      .updatePage(page)
      .then(
        function(page){
          res.json();
        },
        function(error){
          res.statusCode(404).send(error);
        }
      )
  }

  function deletePage(req,res){

  }
};
