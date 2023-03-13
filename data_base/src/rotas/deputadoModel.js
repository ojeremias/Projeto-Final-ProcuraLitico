const { Sequelize, DataTypes } = require("sequelize");

const db = require("./db");

const Deputado = db.define(
  "deputado",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.VARHCAR,
      allowNull: false,
    },
    siglaPartido: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    estado: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
  },
  {
    tableName: "deputado",
  }
);

module.exports = Deputado;
