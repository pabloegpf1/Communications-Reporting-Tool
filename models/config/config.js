require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "DB_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: false
    }
  },
  test: {
    use_env_variable: "DB_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: false
    }
  },
  production: {
    use_env_variable: "DB_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: false
    }
  }
};
