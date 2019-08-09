var express = require("express")
var router = express.Router()
var AdminController = require("../controllers/admin")

function isAdmin(request, response, next) {
  if (request.user && request.user.admin == true) next()
  else response.redirect("/user/login")
}

//GET Requests
router.get("/users", isAdmin, function(request, response) {
  AdminController.showUsers(request, response)
})

router.get("/impact-settings", isAdmin, function(request, response) {
  AdminController.showImpactSettings(request, response)
})

router.get("/media-settings", isAdmin, function(request, response) {
  AdminController.showMediaSettings(request, response)
})

router.get('/classification-settings', isAdmin, function(request, response) {
	AdminController.showClassificationSettings(request, response)
})

router.get('/media-settings', isAdmin, function(request, response) {
	AdminController.showMediaTypes(request, response)
})

router.get('/social-media-settings', isAdmin, function(request, response) {
	AdminController.showSocialMediaSettings(request, response)
})

router.get('/add-classification', isAdmin, function(request, response) {
	AdminController.showNewClassificationForm(request, response)
})

router.get('/add-impact-type', isAdmin, function(request, response) {
	AdminController.showNewImpactTypeForm(request, response)
})

router.get('/add-media-type', isAdmin, function(request, response) {
	AdminController.showNewMediaTypeForm(request, response)
})

router.get('/add-social-media', isAdmin, function(request, response) {
	AdminController.showNewSocialMediaForm(request, response)
})

router.get('/add-social-media-account', isAdmin, function(request, response) {
	AdminController.showNewSocialMediaAccountForm(request, response)
})

router.get("/add-user/", isAdmin, function(request, response) {
  AdminController.showNewUserForm(request, response)
})

router.get("/contributions/:id", isAdmin, function(request, response) {
  AdminController.showContributionsByUser(request, response)
})

router.get("/change-status/:id", isAdmin, function(request, response) {
  AdminController.changeUserStatus(request, response)
})

router.get("/delete-user/:id", isAdmin, function(request, response) {
  AdminController.deleteUser(request, response)
})

//POST Requests

router.post('/add-classification', isAdmin, function(request, response) {
	AdminController.addClassification(request, response)
})

router.post('/add-impact-type', isAdmin, function(request, response) {
	AdminController.addImpactType(request, response)
})

router.post('/add-media-type', isAdmin, function(request, response) {
	AdminController.addMediaType(request, response)
})

router.post('/add-social-media', isAdmin, function(request, response) {
	AdminController.addSocialMedia(request, response)
})

router.post('/add-social-media-account', isAdmin, function(request, response) {
	AdminController.addSocialMediaAccount(request, response)
})

module.exports = router
