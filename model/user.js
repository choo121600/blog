const Sequelize = require("sequelize");
var sequelize = require("./database");

var nametable = "userTable";

var UserSchema = sequelize.define(nametable, {
  name: {
    type: Sequelize.STRING,
    maxlength: 50,
  },
  email: {
    type: Sequelize.STRING,
    trim: true,
    unique: 1,
  },
  password: {
    type: Sequelize.STRING,
    minlength: 8,
  },
  lastname: {
    type: Sequelize.STRING,
    maxlength: 50,
  },
  role: {
    type: Sequelize.NUMBER,
    default: 0,
  },
  token: {
    type: Sequelize.STRING,
  },
  tokenExp: {
    type: Sequelize.NUMBER,
  },
});

module.exports = user;
