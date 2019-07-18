"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("media_type", [
      {
        id: 1,
        type: "Online Media"
      },
      {
        id: 2,
        type: "Blog"
      },
      {
        id: 3,
        type: "Institutional"
      },
      {
        id: 4,
        type: "Content Aggregator"
      },
      {
        id: 5,
        type: "Magazine"
      },
      {
        id: 6,
        type: "Newsletter"
      },
      {
        id: 7,
        type: "Newspaper"
      },
      {
        id: 8,
        type: "News Agency"
      },
      {
        id: 9,
        type: "Radio"
      },
      {
        id: 10,
        type: "TV"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("media_type", null, {});
  }
};
