var Dissemination = require("../models/queries/dissemination");
var Impact = require("../models/queries/impact");
var SMshare = require("../models/queries/smShare");
var Media = require("../models/queries/media");

exports.showDisseminations = (request, response) => {
  Dissemination.getAvailableDisseminations()
    .then(disseminations => {
      response.render("disseminations", {
        title: "Disseminations",
        disseminations: disseminations,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showDisseminationsByType = (request, response) => {
  Dissemination.getDisseminationsByType(request.params.id)
    .then(disseminations => {
      response.render("disseminations", {
        title: "Disseminations",
        disseminations: disseminations,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showImpactsAndSharesByDissemination = (request, response) => {
  Impact.getImpactsByDissemination(request.params.id)
  .then(impacts => {
    SMshare.getSharesByDissemination(request.params.id)
    .then(shares => {
      response.render("impactsAndShares", {
        title: "Generated Impacts and SM Shares",
        impacts: impacts,
        shares:shares,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
  })
  .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showNewDisseminationForm = (request, response) => {
  response.render("newDissemination", {
    admin: request.user.admin
  });
};

exports.showDisseminationDetails = (request, response) => {
  Dissemination.getDisseminationById(request.params.id)
    .then(dissemination => {
      response.render("disseminationDetails", {
        dissemination: dissemination,
        admin: request.user.admin
      });
    })
    .catch(err => res.render("error", { message: "Error", error: err }));
};

exports.showEditDisseminationForm = (request, response) => {
  Dissemination.getDisseminationById(request.params.id)
    .then(dissemination => {
      var date = new Date(dissemination.date.toDateString());
      dissemination.date = date.getFullYear() +"-" +("0" + (date.getMonth() + 1)).slice(-2) +"-" +("0" + date.getDate()).slice(-2);
      response.render("editDissemination", {
        dissemination: dissemination,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.addDissemination = (request, response) => {
  let newDissemination = createDisseminationFromRequest(
    request.body,
    request.user.id
  );
  Dissemination.addDissemination(newDissemination)
    .then(() => response.redirect("/disseminations"))
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.addOtherDissemination = (request, response) => {
  let newDissemination = createOtherTypeOfDissemination(
    request.body,
    request.user.id
  );
  return Dissemination.addDissemination(newDissemination)
};

exports.searchDissemination = (request, response) => {
  Dissemination.searchDissemination(request.body.string)
    .then(disseminations => {
      response.render("disseminations", {
        title: "Search Results",
        disseminations: disseminations,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.editDissemination = (request, response) => {
  let newDissemination = createDisseminationFromRequest(
    request.body,
    request.user.id
  );
  Dissemination.updateDissemination(newDissemination, request.params.id)
    .then(() => response.redirect("/disseminations"))
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.deleteDissemination = (request, response) => {
  Dissemination.deleteDissemination(request.params.id)
    .then(() => response.redirect("/disseminations"))
    .catch(err => response.render("error", { message: "Error", error: err }));
};

const createDisseminationFromRequest = function(data, user_id) {
  return (dissemination = {
    added_by: user_id,
    headline: data.headline,
    lead_paragraph: data.lead_paragraph,
    summary: data.summary,
    pr_news: data.pr_news,
    url: data.url,
    date: data.date
  });
};

const createOtherTypeOfDissemination = function(data, user_id) {
  return (dissemination = {
    added_by: user_id,
    headline: data.dissemination_headline,
    lead_paragraph: data.dissemination_lead_paragraph,
    summary: data.dissemination_summary,
    pr_news: data.dissemination_pr_news,
    url: data.dissemination_url,
    date: data.dissemination_date,
    include_in_report: false
  });
};