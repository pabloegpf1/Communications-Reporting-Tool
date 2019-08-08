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
      },
      {
        first_name: "Rebeca",
        last_name: "De Miguel",
        username: "rebeca_demiguel",
        admin: true,
        password: bcrypt.hashSync(process.env.USER_PW, 9)
      },
      {
        first_name: "Alejandro",
        last_name: "Amaro",
        username: "alejandro_amaro",
        admin: true,
        password: bcrypt.hashSync(process.env.USER_PW, 9)
      },
      {
        first_name: "Almudena",
        last_name: "Alfaro",
        username: "almudena_alfaro",
        admin: true,
        password: bcrypt.hashSync(process.env.USER_PW, 9)
      },
      {
        first_name: "Patricia",
        last_name: "Durán",
        username: "patricia_duran",
        admin: true,
        password: bcrypt.hashSync(process.env.USER_PW, 9)
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
