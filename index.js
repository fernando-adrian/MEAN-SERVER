const express = require('express');
const conectarDB = require('./config/db');

//creamos el servidor
const app = express();

//conectamos a la BD
conectarDB();

app.use('/api/productos', require('./routes/producto'));
//definimos la ruta principal
// app.get('/', (req, res)=> {
//     res.send('Hola mundo');
// });

app.listen (4000, ()=> {
    console.log("el servidor esta corriendo perfectamente");
});