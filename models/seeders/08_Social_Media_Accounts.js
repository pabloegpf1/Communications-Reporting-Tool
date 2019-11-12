"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE social_media_account_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("social_media_account", [
      {
        social_media: 1,
        name: "@example",
        url: "twitter.com/"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("social_media_account", null, {});
  }
};
