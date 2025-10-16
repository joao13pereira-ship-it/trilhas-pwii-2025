// Construindo um servidor web com Node.js
const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.end(`
  <html>
  <head>
    <title>PWII</title>
    </head>
    <body>
    <h1>Olá, Mundo!</h1>    
    </body>
  <html>
  `);
});

// Definindo a porta do servidor
const porta = 3000;

// Iniciando o servidor
servidor.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
