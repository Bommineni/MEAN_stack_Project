
module.exports = function(){

  var mongoose = require("mongoose");
  var WebsiteSchema = require("./website.schema.server")();
  var Website = mongoose.model("Website", WebsiteSchema);

  var api = {
    createWebsiteForUser : createWebsiteForUser,
    findAllWebsitesForUser : findAllWebsitesForUser,
    findWebsiteById : findWebsiteById,
    updateWebsite : updateWebsite,
    deleteWebsite : deleteWebsite
  }
  return api;

  function createWebsiteForUser(userId, website){
    website._user = userId;
    return Website.create(website);
  }

  function findAllWebsitesForUser(userId){
    return Website.find({_user: userId});
  }

  function findWebsiteById(websiteId){
    return Website.findById({websiteId});
  }

  function updateWebsite(websiteId, website){
    delete Website._id;
    return Website
      .update({_id: websiteId},{
        $set: {
        websitename: Website.name,
        websitetitle: Website.description
        }
      }
    );
  }

  function deleteWebsite(websiteId){
    return Website.remove({_id:websiteId});
  }
}
