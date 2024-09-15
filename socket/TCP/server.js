import net from 'node:net';

// Crear servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Evento cuando se recibe un dato del cliente
    socket.on('data', (data) => {
        console.log('Datos recibido:', data.toString());

        // Enviar solo el mensaje del servidor, sin concatenar el mensaje recibido
        socket.write('Hola desde el servidor');
    });

    // Manejar eventos con errores
    socket.on('error', (err) => {
        console.error('Error de conexion :', err);
    });

    // Evento cuando la conexion del cliente es cerrada
    socket.on('close', () => {
        console.log('Cliente desconectado');
    });

});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor TCP a la escucha en el puerto ${port}`);
});
