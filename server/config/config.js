require('dotenv').config();

module.exports = {
    "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": "sql3.freesqldatabase.com",
      "dialect": "mysql",
      "port": process.env.DB_PORT
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "sql3.freesqldatabase.com",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "sql3.freesqldatabase.com",
      "dialect": "mysql"
    }
  }
}

