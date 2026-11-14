/*
    En esta seccion veremos como utilizar una libreria o un paquete que estemos importando, que no tenga soporte directo en ts
    Esto puede ser porque no fue escrito en ts o porque no tiene archivos de definicion en ts

    https://expressjs.com/
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});