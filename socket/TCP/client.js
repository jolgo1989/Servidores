import net from 'node:net';

const client = new net.Socket();// Crea un nuevo socket TCP para conectarse al servidor.

const port = 3000;
const host = 'localhost'; // Change to the host where the server is

client.connect(port, host, () => {
    console.log('Conexion al servidor TCP');// Mensaje que indica que el cliente se ha conectado al servidor.
    client.write('Hola desde el cliente');// Envía un mensaje al servidor una vez que la conexión está establecida.
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

