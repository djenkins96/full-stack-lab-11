var http = require('http');

var server = http.createServer(function(req, res){
    if(req.mehod === 'POST') {
        var incomingData = '';
        req.on('data', function(data){
            incomingData += data;
        });
        req.on('end', function() {
            // at this point we guarantee all post data has come in
            var upper = incomingData.toUpperCase();
            res.writeHead(200, {'content-Type': 'text/plain'});
            res.end(upper);
        });
    }
});

server.listen(process.argv[2]);