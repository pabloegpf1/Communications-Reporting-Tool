"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE classification_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("classification", [
      {
        id: 1,
        classification: "Awards"
      },
      {
        id: 2,
        classification: "Careers"
      },
      {
        id: 3,
        classification: "Collaboration"
      },
      {
        id: 4,
        classification: "Events"
      },
      {
        id: 5,
        classification: "External"
      },
      {
        id: 6,
        classification: "Incorporations/Departures"
      },
      {
        id: 7,
        classification: "Institutional"
      },
      {
        id: 8,
        classification: "Mention"
      },
      {
        id: 9,
        classification: "Media Impacts"
      },
      {
        id: 10,
        classification: "Projects"
      },
      {
        id: 11,
        classification: "Publications"
      },
      {
        id: 12,
        classification: "Other"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("classification", null, {});
  }
};
