const express = require('express');
const conectarDB = require('./config/db');

//creamos el servidor
const app = express();

//conectamos a la BD
conectarDB();

app.use(express.json());
app.use('/api/productos', require('./routes/producto'));


app.listen (4000, ()=> {
    console.log("el servidor esta corriendo perfectamente");
});