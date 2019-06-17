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
      headline: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      summary: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      publication_type: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'publication_type',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      added_by: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
      comments: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      language: { 
        allowNull: false,
        type: Sequelize.ENUM("spanish","english","french","german","italian","russian","greek","chinese","japanese","arabic","other"),
        unique: false
      },
      published: { 
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
        type: Sequelize.ENUM("pr","news"),
        unique: false
      },
      photo_count: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: false
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      shortened_url: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
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
    return queryInterface.dropTable('publication');
  }
};