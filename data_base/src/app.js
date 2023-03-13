const express = require("express");

const usuarioRota = require("./usuarioRota");
const database = require("./db");
// const deputadoRota = require("./deputadoRota");
// const noticiaRota = require("./noticiaRota");

const port = 8000;

const app = express();
app.use(express.json());

app.use("/usuarios", usuarioRota);

app.listen(port, async () => {
  const resultDb = await database.sync({ alter: true });
  console.log(resultDb);
  console.log("server started!");
});
