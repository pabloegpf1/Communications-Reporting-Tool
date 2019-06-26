'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      id: 0,
      first_name: 'Admin',
      last_name: 'Admin',
      username: 'Admin',
      admin: true,
      password: bcrypt.hashSync(process.env.ADMIN_PW, 9)
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};