// Importa o módulo Express
const express = require("express");

// Cria uma aplicação Express
const app = express();

// Define a porta do servidor
const PORT = 3000;

// Rota principal
app.get("/", (req, res) => {
  res.send("<h2>Página Principal!</h2>");
});

// Rota "Sobre"
app.get("/sobre", (req, res) => {
  res.send("<h2>Página Sobre!</h2>");
});

// Rota "Contato"
app.get("/contato", (req, res) => {
  res.send("<h4>Página Contato!</h4>");
});

// Rota "Curso"
app.get("/curso", (req, res) => {
  const curso = {
    nome: "Técnico em Desenvolvimento de Sistemas",
    duracao: "18 meses",
    modalidade: "Presencial",
  };
  res.send(` <h1> Página Curso<h1>
             <p>Curso: ${curso.nome}</p>
            <p>Duração: ${curso.duracao}</p>
            <p>Modalidade: ${curso.modalidade}</p>`);
});
// Rotas para tratar paginas não encontradas (404)
// Esse bloco funciona como o else do servidor HTTP puro
app.use((req, res) => {
  res.status(404).send("<h1>404 - Página Não Encontrada</h1>");
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
