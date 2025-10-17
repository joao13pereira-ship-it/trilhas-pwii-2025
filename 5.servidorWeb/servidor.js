// Construindo um servidor web com Node.js
const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (req.url === "/") {
    res.end(`
    <html>
    <head>
        <title>PWII</title>
        </head>
        <body>
        <h1>Página Principal</h1>    
        </body>
    <html>
    `);
  } else if (req.url === "/sobre") {
    res.end(`
        <html>
        <head>
            <title>PWII</title>
            </head>
            <body>
            <h1> Página Sobre!</h1>    
            </body>
        <html>
        `);
  } // Added closing bracket for else if
});

// Definindo a porta do servidor
const porta = 3000;

// Iniciando o servidor
servidor.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
