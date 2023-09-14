const http = require('http')
const fs = require('fs');
const path = require('path');
const port = 3000;

server = http.createServer(function(req, res){
    if(req.method === 'GET'){
        readFileSendResponse('get.html', 'text/html', res)
    }
    else if(req.method === 'POST'){
        readFileSendResponse('post.html', 'text/html', res)
    }
    else{
        res.statusCode = 405;
        res.setHeader('Allow', ['GET', 'POST']);
        res.end();
    }
});

/* 
  * @param {string} fileName - name of the file to be read
  * @param {string} contentType - type of the content to be sent in the response
  * @param {object} response - response object
  */
const readFileSendResponse = (fileName, contentType, response) => {
    fs.readFile(path.resolve(fileName), function (error, file) {
      if (error) {
        response.writeHead(404);
        response.write('An error occured: ', error);
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.write(file);
      }
      response.end();
    })
  }

server.listen(port);