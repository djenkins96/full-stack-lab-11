// var fs = require('fs');
// var path = process.argv[2];

// fs.readFile(path, 'utf8', function(err, data){
//     var file = data.split('\n');
//     console.log(file.length - 1);
// })



var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
    if (err) {
        console.log(err);
    } else {

        var text = data.toString();

        var lines = text.split('\n');

        console.log(lines.length - 1);
    }
})



