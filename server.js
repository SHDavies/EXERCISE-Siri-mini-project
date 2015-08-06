var http = require('http');

var messages = ["Hello there", "Wat", "I don't understand", "I can help with that"];

var onRequest = function(req, res) {
	if (req.method === 'GET') {
		var randomNum = Math.floor(Math.random() * 4);
		res.writeHead(200, {
		  'Connection': 'close',
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		res.end(JSON.stringify({message: messages[randomNum]}));
	}
}

http.createServer(onRequest).listen(8887);