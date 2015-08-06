var http = require('http');

var messages = ["Hello there", "Wat", "I don't understand", "I can help with that"];

var onRequest = function(req, res) {
	if (req.method === 'GET') {
		var randomNum = Math.floor(Math.random() * 4);
		res.statusCode = 200;

		res.setHeader('Content-Type', 'application/json');

		// Allow any website to access this API
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

		// Don’t allow scripts or iframes execution from domains we don't trust
		res.setHeader('X-XSS-Protection', '1; mode=block');
		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
		res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");
		res.end(JSON.stringify({message: messages[randomNum]}));
	}
}

http.createServer(onRequest).listen(8887);