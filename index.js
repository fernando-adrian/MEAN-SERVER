const express = require('express');

//creamos el servidor
const app = express();

//definimis la ruta principal
app.get('/', (req, res)=> {
    res.send('Hola mundo');
});

app.listen (4000, ()=> {
    console.log("el servidor esta corriendo perfectamente");
});