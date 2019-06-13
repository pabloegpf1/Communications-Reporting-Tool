'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('media_type', [
    {
      type: 'Online Media'
    },
    {
      type: 'Blog'
    },
    {
      type: 'Institutional'
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('media_type', null, {});
  }
};