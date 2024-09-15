import dgram from 'dgram';
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    server.send('Hello from server', rinfo.port, rinfo.address);
});

server.on('listening', () => {
    const address = server.address();

    console.log(`UDP server listening on ${address.address}:${address.port}`);
});

server.bind(8081, 'localhost');