'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('media_content', [
    {
      content: 'General Interest'
    },
    {
      content: 'Specialised'
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('media_content', null, {});
  }
};