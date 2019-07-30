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

router.get("/contributions/:id", isAdmin, function(request, response) {
  AdminController.showContributionsByUser(request, response)
})

router.get("/add-user/", isAdmin, function(request, response) {
  AdminController.showNewUserForm(request, response)
})

router.get("/change-status/:id", isAdmin, function(request, response) {
  AdminController.changeUserStatus(request, response)
})

router.get("/delete-user/:id", function(request, response) {
  AdminController.deleteUser(request, response)
})

module.exports = router
