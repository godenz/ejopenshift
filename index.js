var http = require('http');
var fs = require('fs');


var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    // utilizando fs.createReadStream 
    // leer un archivo y escribirlo en el stream response
    var stream = fs.createReadStream("arch.txt");
    stream.pipe(response);
});

//server.listen(8000, function() {
server.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP, function() {
    console.log('ahora si estoy escuchando');
});