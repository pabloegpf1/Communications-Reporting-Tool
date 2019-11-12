"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE media_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("media", [
      {
        name: "Example",
        url: "www.example.com",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("media", null, {});
  }
};
