"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE media_type_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("media_type", [
      {
        type: "Online Media"
      },
      {
        type: "Blog"
      },
      {
        type: "Institutional"
      },
      {
        type: "Content Aggregator"
      },
      {
        type: "Magazine"
      },
      {
        type: "Newsletter"
      },
      {
        type: "Newspaper"
      },
      {
        type: "News Agency"
      },
      {
        type: "Radio"
      },
      {
        type: "TV"
      },
      {
        type: "Social Media"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("media_type", null, {});
  }
};
