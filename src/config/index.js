require("dotenv").config();

module.exports = {
  port: 4000,
  sessionSecret: process.env.SESSION_SECRET || `meghna_ghatiya_hai`,
  database: {}
};
