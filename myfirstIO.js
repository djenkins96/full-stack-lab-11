// var fs = require('fs');

// var  file= fs.readFileSync(process.argv[2]);

// var fileString = file.toString();

// var split = fileString.split('\n');

// lineCount = split.length;

// console.log(lineCount - 1);

var fs = require('fs');

var data = fsreadFileSync(process.argv[2]);

var text = data.toString();

var lines = text.split('\n');

console.log(lines.length -1);