//blocking mode

console.log('Program Started');

var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('Program ended');

//non blocking

console.log('Non blocking mode started');

fs.readFile('input2.txt', function (err, data){
    if (err) return console.error(err);
    console.log(data.toString());

})
console.log("Non blocking mode Ended");
