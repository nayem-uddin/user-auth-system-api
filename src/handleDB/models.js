const { DataTypes } = require("sequelize");
const { connectionPool } = require("./connectDB");

const User = connectionPool.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { User };
