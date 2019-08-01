var Impact = require("../models/queries/impact");
var Dissemination = require("../models/queries/dissemination");
var SMshare = require("../models/queries/smShare");

var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter' };
var ejs = require('ejs');

options = {
 
  "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  "orientation": "portrait", // portrait or landscape
 
  "border": {
    "top": "2.54cm",            // default is 0, units: mm, cm, in, px
    "right": "2.54cm",
    "bottom": "2.54cm",
    "left": "2.54cm"
  },

  "type": "pdf",             // allowed file types: png, jpeg, pdf
 
}

exports.createPrImpactReport = (request, response) => {
  Dissemination.getDisseminationsByDate(request.body.initial_date,request.body.final_date)
  .then(disseminations => {
    Impact.getImpactsByDate(request.body.initial_date,request.body.final_date)
    .then(impacts => {
      SMshare.getSharesByDate(request.body.initial_date,request.body.final_date)
      .then(shares => {
       /* response.render('templates/PrImpactReport.ejs', { 
          disseminations: disseminations,
          impacts: impacts,
          shares: shares,
          initialDate:request.body.initial_date,
          finalDate: request.body.final_date
        })})*/
          ejs.renderFile('./views/templates/PrImpactReport.ejs', { 
            disseminations: disseminations,
            impacts: impacts,
            shares: shares,
            initialDate:request.body.initial_date,
            finalDate: request.body.final_date
          }, function(err, result) {
            pdf.create(result, options).toFile('./documents/PrImpactReport.pdf', function(err,res) {
            if (err) return console.log(err);
            response.download('./documents/PrImpactReport.pdf');
          })
        })
      })
    })
  })
};