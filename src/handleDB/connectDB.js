require("@dotenvx/dotenvx").config();
const { Sequelize } = require("sequelize");
const connectionPool = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = { connectionPool };
