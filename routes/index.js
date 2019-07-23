var express = require('express');
var router = express.Router();
var Document = require('../controllers/document');

var Impact = require("../models/queries/impact");


router.get('/', function(request, response) {
	response.render('login', {
		authMessage: request.flash('authMessage')
	});
});

router.get('/download-annual-communications-report', function(request, response) {
	Document.createPrImpactReport(request, response);
});

router.get('/pdf', function(request, response) {
	Impact.getImpactById(1)
	.then(impact => response.render('pdf-templates/PrImpactReport',{Impact:impact}))
});

module.exports = router;
