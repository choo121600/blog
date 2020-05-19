var Sequelize = require("sequelize");

const sequelize = new Sequelize("node", "mysql", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
