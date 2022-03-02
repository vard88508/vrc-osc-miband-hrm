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
open('https://vard.space/vrc-osc-hrm/');
console.log("Waiting for connection from browser...");

server.on('connection', ws => {
    console.log("Connected. Waiting for data...");
    ws.on('message', function message(data) {
        if (data == 0) {
            console.log("Got heart rate: 0 bpm, skipping parameter update...");
        } else {
            console.log('Got heart rate: %s bpm', data);
            let heartrate = {
                address: "/avatar/parameters/Heartrate",
                args:
                    {
                        type: "f",
                        value: data/127-1
                    }
            };
            let heartrate2 = {
                address: "/avatar/parameters/Heartrate2",
                args:
                    {
                        type: "f",
                        value: data/255
                    }
            };
            vrchatOSC.send(heartrate);
            vrchatOSC.send(heartrate2);
        }
    });
});