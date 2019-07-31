var SMshare = require("../models/queries/smShare");
var Dissemination = require("../models/queries/dissemination");
var Classification = require("../models/queries/classification");
var DisseminationController = require("../controllers/dissemination");

exports.showShares = (request, response) => {
  SMshare.getShares()
    .then(shares => {
      console.log(shares)
      response.render("shares", {
        title: "Social Media Shares",
        shares: shares,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showNewShareForm = (request, response) => {
  SMshare.getSocialMedias().then(social_medias => {
      SMshare.getSocialMediaAccounts().then(social_media_accounts => {
        Dissemination.getAvailableDisseminations().then(disseminations => {
          Classification.getClassifications().then(classifications => {
            response.render("newShare", {
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

exports.showEditShareForm = (request, response) => {
  Dissemination.getAvailableDisseminations().then(disseminations => {
    Classification.getClassifications().then(classifications => {
      SMshare.getSocialMedias().then(social_medias => {
        SMshare.getSocialMediaAccounts().then(accounts => {
          SMshare.getShareById(request.params.id).then(share => {
            var date = new Date(share.date.toDateString());
            share.date = date.getFullYear() +"-" +("0" + (date.getMonth() + 1)).slice(-2) +"-" +("0" + date.getDate()).slice(-2);
            Dissemination.getDisseminationById(share.dissemination).then(dissemination => {
              dissemination.date = date.getFullYear() +"-" +("0" + (date.getMonth() + 1)).slice(-2) +"-" +("0" + date.getDate()).slice(-2);
              response.render("editShare", {
                disseminations: disseminations,
                dissemination: dissemination,
                classifications: classifications,
                share: share,
                social_medias: social_medias,
                accounts: accounts,
                admin: request.user.admin
              });
            });
          });
        });
      });
    })
  })
  .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.showShareDetails = (request, response) => {
  SMshare.getShareById(request.params.id)
    .then(share => {
      response.render("shareDetails", {
        share: share,
        admin: request.user.admin
      });
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
};

exports.AddShare = (request, response) => {
  let newSmShare = createSmShareFromRequest(request.body, request.user.id);
  if(request.body.dissemination == "-1"){ //Other type of dissemination
    DisseminationController.addOtherDissemination(request,response)
    .then((dissemination)=>{
      newSmShare.dissemination = dissemination.id
      SMshare.addShare(newSmShare)
      .then(() => response.redirect("/sm-shares"))
      .catch(err => response.render("error", { message: "Error", error: err }));
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
  }else{
    SMshare.addShare(newSmShare)
      .then(() => response.redirect("/sm-shares"))
      .catch(err => response.render("error", { message: "Error", error: err }));
  }  
};

exports.editShare = (request, response) => {
  let newShare = createSmShareFromRequest(request.body, request.user.id);
  console.log(newShare)
  if(request.body.dissemination == "-1"){ //Other type of dissemination
    DisseminationController.addOtherDissemination(request,response)
    .then((dissemination)=>{
      newShare.dissemination = dissemination.id
      SMshare.updateShare(newShare, request.params.id)
      .then(() => response.redirect("/sm-shares"))
      .catch(err => response.render("error", { message: "Error", error: err }));
    })
    .catch(err => response.render("error", { message: "Error", error: err }));
  }else{
    SMshare.updateShare(newShare,request.params.id)
    .then(() => response.redirect("/sm-shares"))
    .catch(err => response.render("error", { message: "Error", error: err }));
  }
};

exports.deleteShare = (request, response) => {
  SMshare.deleteShare(request.params.id)
    .then(() => response.redirect("/sm-shares"))
    .catch(err => response.render("error", { message: "Error", error: err }));
};

const createSmShareFromRequest = function(data, user_id) {
  return (share = {
    added_by: user_id,
    headline: data.headline,
    dissemination: data.dissemination === undefined ? null : data.dissemination,
    social_media: data.social_media,
    account: data.social_media_account,
    message: data.message,
    comments: data.comments,
    language: data.language,
    uploaded: data.published === undefined ? false : true,
    has_video: data.has_video === undefined ? false : true,
    proactivity: data.proactivity === undefined ? false : true,
    photo_count: data.photo_count,
    classification: data.classification,
    video_url: data.video_url,
    source_url: data.source_url,
    date: data.date
  });
};