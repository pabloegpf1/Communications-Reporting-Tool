const bcrypt = require("bcryptjs");
var Impact = require("../models/queries/impact");
var User = require("../models/queries/users");

exports.showContributionsByUser = (request, response) => {
  Impact.getImpactsByUser(request.user.id)
    .then(impacts => {
      response.render("impacts", {
        impacts: impacts,
        admin: request.user.admin,
        title: "My Contributions"
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.addUser = (request, response) => {
  let encrypted_pw = bcrypt.hashSync(request.body.password, 9);
  User.addUser({
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    username: request.body.username,
    password: encrypted_pw,
    admin: request.body.admin === undefined ? false : true
  })
    .then(() => {
      if (request.user.admin == true) {
        response.redirect("/admin/users");
      } else {
        response.redirect("/impacts");
      }
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showEditUserForm = (request, response) => {
  response.render("userInfo", {
    admin: request.user.admin,
    user: request.user
  });
};

exports.editUser = (request, response) => {
  let encrypted_pw = bcrypt.hashSync(request.body.password, 9);
  let user = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    username: request.body.username,
    password: encrypted_pw,
    admin: request.user.admin
  }
  User.editUser(user,request.params.id)
  .then(()=>response.redirect('/user/contributions'))
  .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.signOut = (request, response) => {
  request.logout();
  response.redirect("/user/login");
};
