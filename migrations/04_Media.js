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
        unique: true
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
        type: Sequelize.INTEGER,
        references: {
          model: 'media_content',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      coverage: { 
        allowNull: false,
        type: Sequelize.ENUM("local","regional","national","international"),
        unique: false
      },
      format: { 
        allowNull: false,
        type: Sequelize.ENUM("online","paper","other"),
        unique: false
      },
      url: {
        allowNull: true,
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
    return queryInterface.dropTable('media');
  }
};