'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sm_share', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      social_media: { 
        allowNull: false,
        type: Sequelize.ENUM("Twitter","Instagram","Facebook","LinkedIn","Other"),
        unique: false
      },
      account: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      headline: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      language: { 
        allowNull: false,
        type: Sequelize.ENUM("Spanish","English","Other"),
        unique: false
      },
      uploaded: { 
        allowNull: false,
        type: Sequelize.BOOLEAN,
        unique: false
      },
      has_video: { 
        allowNull: false,
        type: Sequelize.BOOLEAN,
        unique: false
      },
      statements: { 
        allowNull: false,
        type: Sequelize.BOOLEAN,
        unique: false
      },
      proactivity: { 
        allowNull: false,
        type: Sequelize.BOOLEAN,
        unique: false
      },
      pr_news: { 
        allowNull: false,
        type: Sequelize.ENUM("PR","NEWS","Announcements"),
        unique: false
      },
      classification: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'classification',
          key: 'id'
        },
        onDelete: 'RESTRICT'
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
      comments: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      photo_count: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: false
      },
      video_url: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      source_url: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
        unique:false
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
    return queryInterface.dropTable('sm_share');
  }
};