"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE social_media_account_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("social_media_account", [
      {
        social_media: 1,
        name: "@IMDEA_Networks",
        url: "twitter.com/IMDEA_Networks"
      },
      {
        social_media: 2,
        name: "@imdea_networks",
        url: "instagram.com/imdea_networks/"
      },
      {
        social_media: 3,
        name: "IMDEA Networks",
        url: "facebook.com/imdea.networks/"
      },
      {
        social_media: 4,
        name: "IMDEA Networks",
        url: "linkedin.com/company/imdea-networks"
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("social_media_account", null, {});
  }
};
