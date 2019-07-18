var express = require("express");
var router = express.Router();
var Document = require("../controllers/document");

router.get("/", function(request, response) {
  response.render("login", {
    authMessage: request.flash("authMessage")
  });
});

router.get("/download-annual-communications-report", function(
  request,
  response
) {
  Document.createPDF(request, response);
});

module.exports = router;
