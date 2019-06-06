'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
        first_name: 'Pablo',
        last_name: 'Escriva',
        username: 'pabloegpf1',
        password: '123456'
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};