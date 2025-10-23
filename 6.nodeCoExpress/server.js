//Importa o mudulo express
const express = require('express');
// Cria uma aplicao express
const app = express();
// Define porta para o servidor
const PORT=3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get(`/`,(req,res) => {
    res.send(' <h2>Pagina Principal!</h2>');
});
