var sum = 0;


for (var i = 2; i < process.argv.length; i++) {
    sum += Number(process.arv[i])
    // var x = process.argv[i];
    // var y = Number(x);
    // sum = sum + y;
}

console.log(sum);


