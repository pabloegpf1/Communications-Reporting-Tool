"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE social_media_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("social_media", [
      {
        id: 1,
        social_media: "Twitter",
      },
      {
        id: 2,
        social_media: "Instagram",
      },
      {
        id: 3,
        social_media: "LinkedIn",
      },
      {
        id: 4,
        social_media: "Facebook",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("social_media", null, {});
  }
};
