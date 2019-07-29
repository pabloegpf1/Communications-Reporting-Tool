var SMshare = require("../models/queries/smShare");
var Dissemination = require("../models/queries/dissemination");
var Classification = require("../models/queries/classification");

exports.showSmshares = (request, response) => {
  SMshare.getShares()
    .then(shares => {
      console.log(shares)
      response.render("smShares", {
        title: "Social Media Shares",
        shares: shares,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showNewSmshareForm = (request, response) => {
  SMshare.getSocialMedias().then(social_medias => {
      SMshare.getSocialMediaAccounts().then(social_media_accounts => {
        Dissemination.getAvailableDisseminations().then(disseminations => {
          Classification.getClassifications().then(classifications => {
            response.render("newSmShare", {
              social_medias: social_medias,
              social_media_accounts: social_media_accounts,
              disseminations: disseminations,
              admin: request.user.admin,
              classifications: classifications
            });
          });
        });
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};
