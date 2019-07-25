"use strict";
require("dotenv").config();
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: 0,
        first_name: "Admin",
        last_name: "Admin",
        username: "Admin",
        admin: true,
        password: bcrypt.hashSync(process.env.ADMIN_PW, 9)
      },
      {
        id: 1,
        first_name: "Rebeca",
        last_name: "De Miguel",
        username: "rebeca_demiguel",
        admin: true,
        password: bcrypt.hashSync(process.env.USER_PW, 9)
      },
      {
        id: 2,
        first_name: "Alejandro",
        last_name: "Amaro",
        username: "alejandro_amaro",
        admin: true,
        password: bcrypt.hashSync(process.env.USER_PW, 9)
      },
      {
        id: 3,
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
