const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);
        // Echo the message back to the client
        ws.send('Message received: ' + message);
        // Send a temperature value to the client called tempC
        ws.send(JSON.stringify({ tempC: Math.floor(Math.random() * 100) }));
        // send a humidity value to the client called humidity
        ws.send(JSON.stringify({ humidity: Math.floor(Math.random() * 100) }));
        // send a fanOn 0 or 1 value to the client called fan 
        ws.send(JSON.stringify({ fanOn: Math.floor(Math.random() * 2) }));
    });

    ws.send('WebSocket server connected');
});