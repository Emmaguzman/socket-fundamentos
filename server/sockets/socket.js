const { io } = require('../server')
    //conexion en consola escuchando que pasa en el front 
io.on("connection", (client) => {
    console.log("Usuario conectado");
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido wachin'
    });

    client.on("disconnect", () => {
        console.log("usuario desconectado");
    });
    //escuchando front
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data) //<--manda el mensaje a todos los conectados
            // if (mensaje.usuario) {
            //     callback({
            //         resp: 'todo salio bien'
            //     });
            // } else {
            //     callback({
            //         resp: 'TODO MAL!'
            //     })
            // }

    });
});