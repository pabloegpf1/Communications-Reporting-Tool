'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('media_content', [
    {
      id: 1,
      content: 'General Interest'
    },
    {
      id: 2,
      content: 'Specialised'
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('media_content', null, {});
  }
};