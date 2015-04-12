//Call the net module
var net = require('net');
var server = net.createServer(function(socket){
	socket.write('Hello\n');
	socket.end('world\n'); //Terminate the scoket here
	//socket.write('world\n'); //Terminate the scoket here

	socket.on('data',function(data){ // data-- packet
		socket.write(data);
	});
});
server.listen(7000);

//Run - telnet localhost 7000