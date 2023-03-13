const express = require("express");

const Usuario = require("./usuarioModel");

const rota = express.Router();
rota.use(express.json());

rota.get("/", async (req, res) => {
  const usuario = await Usuario.findAll();
  res.send(usuario);
});

rota.get("/:id", async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  res.send(usuario);
});

rota.get("/:id", async (req, res) => {
  const usuario = await Usuario.findOne({
    where: {
      id: res.params.id,
    },
  });
  res.send(usuario);
});

rota.put("/:id", (req, res) => {
  const aluno = Aluno.create(JSON.parse(req.body));
  res.send(aluno);
});

rota.post("/", async (req, res) => {
  const novoUsuario = req.body;
  novoUsuario = await Usuario.create(req.body);
  res.send({ message: "Usuario adicionado com sucesso", usuario: novoUsuario });
});

rota.delete("/:id", (req, res) => {
  res.send(`DELETE ID: ${req.body}`);
});

module.exports = rota;
