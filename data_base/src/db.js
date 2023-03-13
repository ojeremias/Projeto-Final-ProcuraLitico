const { Sequelize } = require("sequelize");

const dbSequelize = new Sequelize("banco-deputados", "root", "mysql", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = dbSequelize;
