const Sequelize = require("sequelize");
const Models = require("./models");

const SQL_HOST = `localhost`;
const SQL_PORT = 50197;
const SQL_DATABASE = `UChitkkara`;
const SQL_USERNAME = `meghna_ji`;
const SQL_PASSWORD = `Password@1234`;

// Create Sequelize instance
const sequelize = new Sequelize(SQL_DATABASE, SQL_USERNAME, SQL_PASSWORD, {
  host: SQL_HOST, // Your SQL Server host,
  port: SQL_PORT,
  dialect: "mssql", // Dialect for SQL Server
  dialectOptions: {
    options: {
      encrypt: true // For secure connection (recommended)
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { sequelize /*, Models: {}*/ };
/*
for (var m of Object.keys(Models)) {
  module.exports.Models[m] = Models[m](sequelize);
}
*/
