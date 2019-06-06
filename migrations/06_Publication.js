'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('publication', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      collection: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      media_Outlet: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      uploaded: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      uploaded_by: {
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
    return queryInterface.dropTable('publication');
  }
};