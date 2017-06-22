var http = require('http');

var fs = require('fs');


//setting up a server
var server = http.createServer (function(req, res) {
    res.writeHead(200, {'content-Type': 'text/plain'});
    // var readStream = fs.createReadStream(process.argv[3]);
    // readStream.pipe(res);
    // can be done in one line
    fs.createReadStream(process.argv[3]).pipe(res);
})

server.listen(Number(process.argv[2]));