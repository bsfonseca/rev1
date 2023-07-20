import express from "express";
import { usuarios } from "./usuarios.js";

const app = express();
app.use(express.json());

app.get("/usuarios", (req, res) => {
  res.status(200).send(usuarios);
});

app.post("/usuarios", (req, res) => {
  const user = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    id: req.body.id,
  };
  usuarios.push(user);
  res.status(201).send("Usuário criado com sucesso");
});

app.listen(3000, () => {
  console.log("Api está rodando!");
});
