'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      type: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'media_type',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      content: { 
        allowNull: false,
        type: Sequelize.ENUM("General Interest","Specialised"),
        unique: false
      },
      coverage: { 
        allowNull: false,
        type: Sequelize.ENUM("Local","Regional","National","International"),
        unique: false
      },
      format: { 
        allowNull: false,
        type: Sequelize.ENUM("Online","Paper","Other"),
        unique: false
      },
      url: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true
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
    return queryInterface.dropTable('media');
  }
};