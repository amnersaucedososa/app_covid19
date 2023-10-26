const express = require("express");
// const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PUERTO;

// Configurar CORS para permitir solicitudes desde cualquier origen
// app.use(cors());

const router = require("./app/router/router");
app.use("/api",router);

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use("/",(req, res)=>{
    res.send("Bienvenido!!");
});

app.listen(port,()=>{
    console.log(`Servidor encendido en el puerto ${port}`)
});