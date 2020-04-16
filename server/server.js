const express = require("express");
const socketIO = require("socket.io"); //<--escuchador del backend
const path = require("path");
const http = require("http");

const app = express();
let server = http.createServer(app); //<-- creo un server

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server);
require('./sockets/socket')





//conexion a front
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});