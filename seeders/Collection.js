'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('collection', [
    {
      title: 'News',
      description: 'All the news related to IMDEA Networks'
    },
    {
      title: 'Awards',
      description: 'All the awards related to IMDEA Networks'
    },    
    {
    title: 'Articles',
    description: 'All the articles related to IMDEA Networks'
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('collection', null, {});
  }
};