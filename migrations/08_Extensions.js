'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE EXTENSION unaccent')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP EXTENSION unaccent')
  }
};