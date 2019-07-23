'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('impact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      headline: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      type: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'impact_type',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
      media: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'media',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      media_section: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      spokesperson: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      dissemination: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'dissemination',
          key: 'id'
        },
        onDelete: 'RESTRICT'
      },
      comments: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      language: { 
        allowNull: false,
        type: Sequelize.ENUM("Spanish","English","Other"),
        unique: false
      },
      classification: { 
        allowNull: false,
        type: Sequelize.ENUM("Awards","Careers","Collaboration","Events","External","Incorporations/Departures","Institutional","Mention","Media Impacts","Projects","Publications","Other"),
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
    return queryInterface.dropTable('impact');
  }
};