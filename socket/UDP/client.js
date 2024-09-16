import dgram from 'node:dgram';

const client = dgram.createSocket('udp4');

client.send('Hola desde el cliente', 8081, 'localhost', (err) => {
    if (err) console.error(err);

});

client.on('message', (msg, rinfo) => {
    console.log(`Cliente recibe: ${msg} from ${rinfo.address}:${rinfo.port}`);
    client.close();
});