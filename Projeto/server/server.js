const express = require("express");
const bodyParser = require("body-parser");
const { saveUser } = require("./database");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/addUser", (req, res) => {
  const userData = req.body;
  saveUser(userData);
  res.status(200).json({ message: "Usuário salvo com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
