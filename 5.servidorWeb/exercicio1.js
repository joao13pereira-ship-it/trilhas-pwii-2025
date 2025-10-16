// Construindo um servidor web com Node.js
const http = require("http");

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    if (req.url ==='/'){
    res.end(`
    <html>
    <head>
        <title>PWII</title>
        </head>
        <body>
        <h1>Bem vindo ao meu servidor Node.js!</h1>    
        </body>
    <html>
    `);
    }
    else if (req.url === '/saudacao'){
        res.end(`
        <html>
        <head>
            <title>PWII</title>
            </head>
            <body>
            <h1>Olá,visitante!</h1>    
            </body>
        <html>
        `);
    } 
    else {
        res.end(`
        <html>
        <head>
            <title>PWII</title>
            </head>
            <body>
            <h1>Página não encontrada!</h1>    
            </body>
        <html>
        `);
    }

}); 

// Definindo a porta do servidor
const porta = 3001;

// Iniciando o servidor
servidor.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
