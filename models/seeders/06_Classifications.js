"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE classification_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("classification", [
      {
        classification: "Awards"
      },
      {
        classification: "Careers"
      },
      {
        classification: "Collaboration"
      },
      {
        classification: "Events"
      },
      {
        classification: "External"
      },
      {
        classification: "Incorporations/Departures"
      },
      {
        classification: "Institutional"
      },
      {
        classification: "Mention"
      },
      {
        classification: "Media Impacts"
      },
      {
        classification: "Projects"
      },
      {
        classification: "Publications"
      },
      {
        classification: "Other"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("classification", null, {});
  }
};
