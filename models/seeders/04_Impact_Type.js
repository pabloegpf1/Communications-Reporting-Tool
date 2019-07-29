"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE impact_type_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("impact_type", [
      {
        type: "Article"
      },
      {
        type: "Column"
      },
      {
        type: "Interview"
      },
      {
        type: "News"
      },
      {
        type: "News Brief"
      },
      {
        type: "Podcast"
      },
      {
        type: "Press Release"
      },
      {
        type: "Video"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("impact_type", null, {});
  }
};
