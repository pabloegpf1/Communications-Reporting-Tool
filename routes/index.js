var express = require('express')
var router = express.Router()
var Document = require('../controllers/document')
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
	.then(impact => response.render('pdf-templates/PrImpactReport',{Impact:impact}))
})

module.exports = router
