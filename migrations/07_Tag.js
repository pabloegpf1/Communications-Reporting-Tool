'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tag', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publication: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'publication',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      tag: { 
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tag');
  }
};