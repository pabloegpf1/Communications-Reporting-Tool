var Impact = require("../models/queries/impact");
var Dissemination = require("../models/queries/dissemination");
var SMshare = require("../models/queries/smShare");

var htmlDocx = require('html-docx-js');
var fs = require('fs');
var ejs = require('ejs');

exports.createPrImpactReport = (request, response) => {
  Dissemination.getDisseminationsByDateAscending(request.body.initial_date,request.body.final_date)
  .then(disseminations => {
    Impact.getImpactsByDateAscending(request.body.initial_date,request.body.final_date)
    .then(impacts => {
      SMshare.getSharesByDateAscending(request.body.initial_date,request.body.final_date)
      .then(shares => {
        ejs.renderFile('./views/templates/PrImpactReport.ejs', { 
          disseminations: disseminations,
          impacts: impacts,
          shares: shares,
          initialDate:request.body.initial_date,
          finalDate: request.body.final_date
        }, function(err, result) {
          var converted = htmlDocx.asBlob(result, {margins: {top: 720}});
          fs.writeFile('./documents/PrImpactReport.docx', converted, function(err) {
            if (err) throw err;
            response.download('./documents/PrImpactReport.docx');
          });
        })
      })
    })
  })
};