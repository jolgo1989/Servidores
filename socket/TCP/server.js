import net from 'node:net';

// Crear servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Evento cuando se recibe un dato del cliente
    socket.on('data', (data) => {
        console.log('Datos recibido:', data.toString());

        //Enviando datos de vuelta al cleinete
        socket.write('Hola desde el servidor: ' + data.toString());
    });

    //Manejar eventos con errores
    socket.on('error', (err) => {
        console.error('Error de conexion :', err);
    });

    // Evento cuando la concecion del cliente es cerrada
    socket.on('close', () => {
        console.log('Cliente desconectado');
    });

});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor TCP a la escucha en el puerto ${port}`);
});
