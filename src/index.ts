/*
    En esta seccion veremos como utilizar una libreria o un paquete que estemos importando, que no tenga soporte directo en ts
    Esto puede ser porque no fue escrito en ts o porque no tiene archivos de definicion en ts

    https://expressjs.com/
*/

import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});