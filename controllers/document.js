var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter' };
var ejs = require('ejs');
var Impact = require("../models/queries/impact");

exports.createPrImpactReport = (request, response) => {
  Impact.getImpactById(1) //TODO
  .then(impact => {
    ejs.renderFile('./views/templates/PrImpactReport.ejs', { Impact: impact }, function(err, result) {
      pdf.create(result, options).toFile('./documents/PrImpactReport.pdf', function(err,res) {
        if (err) return console.log(err);
        response.download('./documents/PrImpactReport.pdf');
      });
    });
  })
};
