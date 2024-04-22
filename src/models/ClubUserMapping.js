const Sequelize = require("sequelize");
const { sequelize } = require("../database");

const ClubUserMapping = sequelize.define(`ClubUserMapping`, {
  Id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  ClubId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    references: {
      model: `Clubs`,
      key: "id" // 'id' refers to column name in fathers table
    }
  },
  UserId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    references: {
      model: `users`,
      key: "id" // 'id' refers to column name in fathers table
    }
  },
  Status: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = ClubUserMapping;
