'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('language', [
    {
      title: 'English'
    },
    {
      title: 'Spanish'
    },    
    {
      title: 'German'
    },    
    {
      title: 'Italian'
    },    
    {
      title: 'Russian'
    },    
    {
      title: 'French'
    },    
    {
      title: 'Portuguese'
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('language', null, {});
  }
};