import dgram from 'node:dgram';

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log(`Mensaje recibido: ${msg} de ${rinfo.address}:${rinfo.port}`);
    server.send('Hola desde el servidor', rinfo.port, rinfo.address);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Servidor UDP escuchando en el socket  ${address.address}:${address.port}`);
});

server.bind(8081, 'localhost');