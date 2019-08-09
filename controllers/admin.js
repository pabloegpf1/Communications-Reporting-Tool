var Users = require("../models/queries/users");
var Impact = require("../models/queries/impact");
var Medias = require("../models/queries/media");
var Classification = require("../models/queries/classification");
var SMshare = require("../models/queries/smShare");

exports.showUsers = (request, response) => {
  Users.getUsers()
    .then(users =>
      response.render("adminUsers", {
        admin: request.user.admin,
        title: "Users",
        users: users
      })
    )
    .catch(err => response.status(500).send(err));
};

exports.showImpactSettings = (request, response) => {
  Impact.getImpactTypes()
    .then(types =>
      response.render("impactSettings", {
        admin: request.user.admin,
        title: "Impact Settings",
        impactTypes: types
      })
    )
    .catch(err => response.status(500).send(err));
};

exports.showContributionsByUser = (request, response) => {
  Impact.getImpactsByUser(request.params.id)
    .then(impacts => {
      response.render("impacts", {
        impacts: impacts,
        admin: request.user.admin,
        title: "User Contributions"
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showNewUserForm = (request, response) => {
  response.render("newUser", {
    admin: request.user.admin
  });
};

exports.changeUserStatus = (request, response) => {
  Users.changeStatus(request.params.id)
    .then(() => response.redirect("/admin/users"))
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.deleteUser = (request, response) => {
  Users.deleteUser(request.params.id)
  .then(() => response.redirect("/admin/users"))
  .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.addClassification = (request, response) => {
  Classification.addClassification({
      classification: request.body.classification
  })
  .then(() => response.redirect('/impacts'))
  .catch(err => response.status(500).send(err))
};

exports.addSocialMediaAccount = (request, response) => {
  SMshare.addSocialMediaAccount({
    social_media: request.body.social_media,
    name: request.body.name,
    url: request.body.url,
  })
  .then(() => response.redirect('/sm-shares'))
  .catch(err => response.status(500).send(err))
};

exports.addSocialMedia = (request, response) => {
  SMshare.addSocialMedia(request.body.social_media)
  .then(() => response.redirect('/sm-shares'))
  .catch(err => response.status(500).send(err))
};

exports.addImpactType = (request, response) => {
  Impact.addImpacType(request.body.impact_type)
  .then(() => response.redirect('/impacts'))
  .catch(err => response.status(500).send(err))
};

exports.addMediaType = (request, response) => {
  Medias.addMediaType(request.body.type)
  .then(() => response.redirect('/impacts'))
  .catch(err => response.status(500).send(err))
};

exports.addClassification = (request, response) => {
  Classification.addClassification(request.body.classification)
  .then(() => response.redirect('/impacts'))
  .catch(err => response.status(500).send(err))
};

exports.showNewClassificationForm = (request, response) => {
    response.render("newClassification", {
        title: "Add Classification",
        admin: request.user.admin
    })
};

exports.showNewMediaTypeForm = (request, response) => {
  response.render("newMediaType", {
      title: "Add Media Type",
      admin: request.user.admin
  })
};

exports.showNewImpactTypeForm = (request, response) => {
  response.render("newImpactType", {
      title: "Add Impact Type",
      admin: request.user.admin
  })
};

exports.showNewSocialMediaAccountForm = (request, response) => {
  SMshare.getSocialMedias()
  .then(social_medias => {
    response.render("newSocialMediaAccount", {
      title: "Add Social Media",
      social_medias: social_medias,
      admin: request.user.admins
    })
  })
  .catch(err => response.status(500).send(err))
};

exports.showNewSocialMediaForm = (request, response) => {
  response.render("newSocialMedia", {
    title: "Add Social Media Account",
    admin: request.user.admin
  })
};

exports.showClassificationSettings= (request, response) => {
    Classification.getClassifications()
    .then((classifications) => {
        response.render("classificationSettings", {
            title: "Classification Settings",
            classifications:classifications,
            admin: request.user.admin
        })
    })
    .catch(err => response.status(500).send(err));
};

exports.showMediaSettings= (request, response) => {
  Medias.getMediaTypes()
  .then((mediaTypes) => {
      response.render("mediaSettings", {
          title: "Media Settings",
          types: mediaTypes,
          admin: request.user.admin
      })
  })
  .catch(err => response.status(500).send(err));
};

exports.showSocialMediaSettings= (request, response) => {
  SMshare.getSocialMedias()
  .then(social_medias => {
    SMshare.getSocialMediaAccounts()
    .then((social_media_accounts) => {
      response.render("socialMediaSettings", {
        title: "Social Media Settings",
        social_media_accounts: social_media_accounts,
        social_medias: social_medias,
        admin: request.user.admin
      })
    })
  })
  .catch(err => response.status(500).send(err));
};
