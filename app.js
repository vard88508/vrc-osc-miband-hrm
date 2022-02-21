const osc = require("osc");
const WebSocket = require('ws');
const open = require('open');

const server = new WebSocket.Server({ port: 3228});

let vrchatOSC = new osc.UDPPort({
    remoteAddress: "localhost",
    remotePort: 9000,
    metadata: true
});

vrchatOSC.open();
open('html/index.html');

console.log('Waiting for connection from browser...')
server.on('connection', ws => {
    console.log('Connected. Waiting for data...')
    ws.on('message', function message(data) {
        console.log('Got heartrate: %s bpm', data);
        let heartrate = {
            address: "/avatar/parameters/Heartrate",
            args:
                {
                    type: "f",
                    value: data/254
                }
        };
        vrchatOSC.send(heartrate);
      });
})