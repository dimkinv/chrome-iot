var net = require('net');
var server = net.createServer((socket)=> {
    console.log('received connection');
    socket.on('data', (data)=>{
       console.log(data.toString());
    });

});

server.listen(20000, '0.0.0.0');