"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE social_media_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("social_media", [
      {
        social_media: "Twitter",
      },
      {
        social_media: "Instagram",
      },
      {
        social_media: "LinkedIn",
      },
      {
        social_media: "Facebook",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("social_media", null, {});
  }
};
