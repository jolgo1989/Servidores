import net from 'node:net';

const port = 3000;

const client = net.createConnection(port, () => {// Crea un nuevo socket TCP para conectarse al servidor.
    // 'connect' listener.
    console.log('Conexion al servidor TCP');
    client.write('Hola desde el cliente');
});

// Evento que se activa cuando el cliente recibe datos del servidor.
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());// Imprime los datos que recibe del servidor en la consola.
    client.end();// Cierra la conexión después de recibir los datos.
});

//Manejar eventos con errores
client.on('error', (err) => {
    console.error('Error de conexión:', err);
});

// Evento que se activa cuando la conexión se cierra.
client.on('close', () => {
    console.log('Desconectado del servidor');// Mensaje que indica que la conexión con el servidor se ha cerrado.
});

