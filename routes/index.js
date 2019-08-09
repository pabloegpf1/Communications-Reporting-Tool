var express = require('express')
var router = express.Router()
var Document = require('../controllers/document')
var SpreadSheet = require('../controllers/spreadsheet')

function loggedIn(request, response, next) {
	if (request.user) next()
	else response.redirect("/user/login")
}

router.get('/',loggedIn, function(request, response) {
	response.render('index', {
		admin: request.user.admin
	});
});

router.post('/download-report', function(request, response) {
	Document.createPrImpactReport(request, response)
})

router.post('/download-spreadsheet', function(request, response) {
	SpreadSheet.createPressClippingSpreadsheet(request, response)
})

module.exports = router
