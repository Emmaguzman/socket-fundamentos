var socket = io();
// me conecto con el servicor
//ON->Escucha informacion
socket.on("connect", function() {
    console.log("Conectado al servidor");

    socket.on("disconnect", function() {
        console.log("perdimos conexion con el servidor");
    });
});
//emit->Manda informacion de manera privada al SOLO AL SERVIDOR
socket.emit("enviarMensaje", {
    usuario: "emmanuel",
    mensaje: "Hola wachin",
}, function(resp) { //<--callback cuando todo sale bien
    console.log('respuesta server: ', resp);
});

// escuchar informacion
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor:", mensaje);
});