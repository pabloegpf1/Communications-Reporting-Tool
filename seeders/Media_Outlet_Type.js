'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('media_outlet_type', [
    {
      title: 'Twitter'
    },
    {
      title: 'Facebook'
    },    
    {
    title: 'Linkedin'
    },    
    {
    title: 'Youtube'
    },    
    {
    title: 'Blog'
    },    
    {
    title: 'Web'
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('media_outlet_type', null, {});
  }
};