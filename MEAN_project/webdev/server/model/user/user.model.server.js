module.exports = function(){
  var mongoose = require("mongoose");
  var UserSchema = require("./user.schema.server")();
  var User = mongoose.model("User", UserSchema);

  var api = {
    findFacebookUser: findFacebookUser,
    createUser : createUser,
    findUserById: findUserById,
    findUserByUsername: findUserByUsername,
    findUserByCredentials: findUserByCredentials,
    updateUser: updateUser,
    deleteUser: deleteUser
  };
  return api;

  function findFacebookUser(id) {
    return User.findOne({"facebook.id": id});
  }

  function createUser(user){
    console.log(user);
    return User.create(user);

  }

  function findUserById(userId){
    return User.findById({_id: userId});
  }

  function findUserByUsername(username){
    return User.findOne({username:username});
  }

  function findUserByCredentials(username, password){
    console.log('from mongo')
    return User.findOne({username: username, password: password})
  }

  function updateUser(userId, user){
    delete User._id;
    return User
      .update({_id: userId},{
        $set: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email}}
        );
  }

 function deleteUser(userId){
    return User.remove({_id: userId});
 }
}
