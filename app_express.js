var express = require('express');
var server = express();

server.get('/',function(req, res){
	res.end('Hello express');
});

server.listen(7000);