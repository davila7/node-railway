var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello railway from github actions');
    response.end();
}

http.createServer(onRequest).listen(8000);