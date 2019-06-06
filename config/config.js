require('dotenv').config();

module.exports = {
  "development": {
    "use_env_variable":"DB_URL",
    "dialect": "postgres",
    "dialectOptions": {
      ssl: true
    }
  },
  "test": {
    "use_env_variable":"DB_URL",
    "dialect": "postgres",
    "dialectOptions": {
      ssl: true
    }
  },
  "production": {
    "use_env_variable":"DB_URL",
    "dialect": "postgres",
    "dialectOptions": {
      ssl: true
    }
  }
}