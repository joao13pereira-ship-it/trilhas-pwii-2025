// Importa o módulo Express
const express = require("express");
// Importa o módulo MySQL
const mysql = require("mysql2");
// Cria uma aplicação Express
const app = express();
// Middleware para interpretar JSON
app.use(express.json());
// Define a porta do servidor
const PORT = 3000;

// Configuração da conexão com o banco de dados MySQL
const bd = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ifsuldeminas",
  database: "escola",
});

// Conecta ao banco de dados MySQL
bd.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  } 
  console.log("Conectado ao banco de dados MySQL!");
});

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
// Rota "Alunos"
app.get("/alunos",(req,res)=>{
  const sql= 'SELECT * FROM alunos';
  bd.query(sql,(err,result)=>{
    if(err){
      console.error('Erro ao buscar alunos:', err);
      res.status(500).send('Erro ao buscar alunos.');
      return;
    }
    console.log('Alunos encontrados:',result);
    res.json(result);

  })  
 })


// Rota "Curso"
app.get("/curso", (req, res) => {
  const curso = {
    nome: "Técnico em Desenvolvimento de Sistemas",
    duracao: "18 meses",
    modalidade: "Presencial",
  };
  res.send(`
    <h1>Página Curso</h1>
    <p>Curso: ${curso.nome}</p>
    <p>Duração: ${curso.duracao}</p>
    <p>Modalidade: ${curso.modalidade}</p>
  `);
});

// Rota para páginas não encontradas (404)
app.use((req, res) => {
  res.status(404).send("<h1>404 - Página Não Encontrada</h1>");
});


// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
