'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('impact_type', [
      {
        id: 1,
        type: 'Article'
      },
      {
        id: 2,
        type: 'Column'
      },
      {
        id: 3,
        type: 'Interview'
      },
      {
        id: 4,
        type: 'News'
      },
      {
        id: 5,
        type: 'News Brief'
      },
      {
        id: 6,
        type: 'Podcast'
      },
      {
        id: 7,
        type: 'Press Release'
      },
      {
        id: 8,
        type: 'Video'
      }
    ]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('impact_type', null, {});
  }
};