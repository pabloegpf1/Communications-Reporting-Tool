var SMshare = require("../models/queries/smShare");
var Dissemination = require("../models/queries/dissemination");
var Media = require("../models/queries/media");

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
