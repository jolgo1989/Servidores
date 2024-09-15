import dgram from 'dgram';
const client = dgram.createSocket('udp4');

client.send('Hello from client', 8081, 'localhost', (err) => {
    if (err) console.error(err);
    client.close();
});

client.on('message', (msg, rinfo) => {
    console.log(`Client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});