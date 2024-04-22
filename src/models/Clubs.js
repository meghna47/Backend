const Sequelize = require("sequelize");
const { sequelize } = require("../database");
const users = require("./users");

const Clubs = sequelize.define(`Clubs`, {
  Id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  President: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Logo: {
    type: Sequelize.BLOB,
    allowNull: true
  },
  PresidentId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  }
});

Clubs.belongsTo(users, {
  foreignKey: "PresidentId", // Foreign key in the Clubs table
  targetKey: "id", // Target key in the Users table
  as: "ClubPresident" // Alias for the association
});

module.exports = Clubs;
