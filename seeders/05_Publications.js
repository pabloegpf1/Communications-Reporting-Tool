'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('publication', [
    {
      headline: 'Online Media',
      summary:'',
      added_by: 0,
      media: '',
      media_section:'',
      spokesperson:'',
      comments:'',
      language:'',
      publication_type:'',
      published:'',
      has_video:'',
      statements:'',
      proactivity:'',
      pr_news:'',
      photo_count:'',
      url:'',
      shortened_url:'',
      date:''
    }
]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('publication', null, {});
  }
};