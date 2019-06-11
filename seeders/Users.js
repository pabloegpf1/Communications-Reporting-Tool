'use strict';
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      id: 0,
      first_name: 'Admin',
      last_name: 'Admin',
      username: 'Admin',
      password: process.env.ADMIN_PW //TEMPORAL!!!!
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};