'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dissemination', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      headline: {
        allowNull: true,
        type: Sequelize.TEXT,
        unique: false
      },
      lead_paragraph: {
        allowNull: true,
        type: Sequelize.TEXT,
        unique: false
      },
      summary: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true
      },
      added_by: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'SET DEFAULT'
      },
      pr_news: { 
        allowNull: true,
        type: Sequelize.ENUM("PR","NEWS"),
        unique: false
      },
      date: {
        allowNull: true,
        type: Sequelize.DATE,
        unique: false
      },
      url: {
        allowNull: true,
        type: Sequelize.TEXT,
        unique: true
      },
      include_in_report: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    return queryInterface.dropTable('dissemination');
  }
};