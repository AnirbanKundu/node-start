/*Call the http module*/
var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200,{"Content-type": "text/plain"});
	//res.end('Hello World\n');
	//debugger;
	res.write('Hello1\n');
	//Server is not idle at any time
	setTimeout(function(){
		res.end('world\n');
	},5000);
	
});

server.listen(7000);

/*
{
	'Connection':'keep-alive',
	'Content-type':'text/plain',
	'Date':'Sun, 12 Apr 2015 06:30:58 GMT',
	'Transfer-Encoding':'chunked'
}
Concurrency proof : [Apache Bench]
ab -n 100 -c 100  http://127.0.0.1:7000/

node debug app_http.js


*/
