const http = require('http');
const port = 3000

server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(req.headers));
    res.end();
});

server.listen(port);
