var express = require('express')
var router = express.Router()
var Document = require('../controllers/document')
var SpreadSheet = require('../controllers/spreadsheet')
var Impact = require("../models/queries/impact")

function loggedIn(request, response, next) {
	if (request.user) next()
	else response.redirect("/user/login")
}

router.get('/',loggedIn, function(request, response) {
	response.render('index', {
		admin: request.user.admin
	});
});

router.get('/download-annual-communications-report', function(request, response) {
	Document.createPrImpactReport(request, response)
})

router.get('/pdf', function(request, response) {
	Impact.getImpactById(1)
	.then(impact => response.render('templates/PrImpactReport',{Impact:impact}))
})

router.get('/press_release_clipping_spreadsheet', function(request, response) {
	SpreadSheet.createPressClippingSpreadsheet(request, response)
})

module.exports = router
