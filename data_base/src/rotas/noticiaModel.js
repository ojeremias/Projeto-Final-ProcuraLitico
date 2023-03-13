const { Sequelize, DataTypes } = requie("sequelize");

const db = require("../db");

const Noticia = db.define(
  "noticia",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    link: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  },
  {
    tableName: "noticia",
  }
);

module.exports = Noticia;
