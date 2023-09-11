const http = require('http');
const port = 3000

function reverseString(str) {
  return str.split("").reverse().join("");
}

server = http.createServer(function(req, res){
  let body = [];
  req
    .on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      res.writeHead(202, { 'Content-Type': 'text/plain' });
      res.write(reverseString(body));
      res.end();
    });
});

server.listen(port);
