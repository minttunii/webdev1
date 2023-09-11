const http = require('http')
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
    if(req.url.includes('/homer')){
        readFileSendResponse('homer.html', 'text/html', res);
    }
    else if(req.url.includes('/bradbury')){
        readFileSendResponse('bradbury.html', 'text/html', res);
    }
    else if(req.url.includes('/')){
        readFileSendResponse('index.html', 'text/html', res);
    }
    else{
        res.statusCode = 404;
        res.statusMessage = 'Requested content not found';
        res.end();
    }
}).listen(3000);


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