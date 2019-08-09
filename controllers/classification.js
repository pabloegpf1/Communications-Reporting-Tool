var Classification = require("../models/queries/classification");

exports.addClassification = (request, response) => {
  Classification.addClassification({
      classification: request.body.classification
  })
    .then(() => response.redirect('impacts'))
    .catch(err => response.status(500).send(err))
};

exports.showNewClassificationForm = (request, response) => {
    response.render("newClassification", {
        title: "Add Classification",
        admin: request.user.admin
    })
};

exports.showClassifications= (request, response) => {
    Classification.getClassifications()
    .then((classifications) => {
        response.render("classificationSettings", {
            title: "Classifications",
            classifications:classifications,
            admin: request.user.admin
        })
    })
    .catch(err => response.status(500).send(err));
};