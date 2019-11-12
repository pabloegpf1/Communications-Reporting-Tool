"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE dissemination_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("dissemination", [
      {
        added_by: 1,
        headline: "Example dissemination",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "Project",
        date: "2018-05-11 00:00:00.000+00",
        pr_news: "PR",
        url: "www.example.com"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("dissemination", null, {});
  }
};
