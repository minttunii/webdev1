const http = require('http');

server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content type': 'text/html' });
    res.write(JSON.stringify(req.headers));
    res.end();
});
