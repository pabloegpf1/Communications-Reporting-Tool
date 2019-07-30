var express = require("express")
var router = express.Router()
var DisseminationController = require("../controllers/dissemination")

function loggedIn(request, response, next) {
  if (request.user) next()
  else response.redirect("/user/login")
}

//GET Requests
router.get("/", loggedIn, function(request, response) {
  DisseminationController.showDisseminations(request, response)
})

router.get("/type/:id", loggedIn, function(request, response) {
  DisseminationController.getDisseminationTypes(request, response)
})

router.get("/add", loggedIn, function(request, response) {
  DisseminationController.showNewDisseminationForm(request, response)
})

router.get("/:id", loggedIn, function(request, response) {
  DisseminationController.showDisseminationDetails(request, response)
})

router.get("/edit/:id", loggedIn, function(request, response) {
  DisseminationController.showEditDisseminationForm(request, response)
})

router.get("/delete/:id", loggedIn, function(request, response) {
  DisseminationController.deleteDissemination(request, response)
})

//POST Requests
router.post("/add", loggedIn, function(request, response) {
  DisseminationController.addDissemination(request, response)
})

router.post("/search/", loggedIn, function(request, response) {
  DisseminationController.searchDissemination(request, response)
})

router.post("/edit/:id", loggedIn, function(request, response) {
  DisseminationController.editDissemination(request, response)
})

module.exports = router
