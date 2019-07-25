'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('social_media_account', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      social_media: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'social_media',
          key: 'id'
        },
        onDelete: 'RESTRICT'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('social_media_account');
  }
};