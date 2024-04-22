const Sequelize = require("sequelize");
const { sequelize } = require("../database");

const users = sequelize.define(`users`, {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  profile_picture: {
    type: Sequelize.BLOB,
    allowNull: true
  }
});

module.exports = users;
