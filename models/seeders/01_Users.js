"use strict";
require("dotenv").config();
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("DELETE FROM impact")
    queryInterface.sequelize.query("DELETE FROM sm_share")
    queryInterface.sequelize.query("ALTER SEQUENCE users_id_seq RESTART WITH 1;")
    queryInterface.sequelize.query("ALTER SEQUENCE impact_id_seq RESTART WITH 1");
    queryInterface.sequelize.query("ALTER SEQUENCE sm_share_id_seq RESTART WITH 1;")
    return queryInterface.bulkInsert("users", [
      {
        first_name: "Admin",
        last_name: "Admin",
        username: "Admin",
        admin: true,
        password: bcrypt.hashSync(process.env.ADMIN_PW, 9)
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
