console.log("Starting app");

const fs = require('fs');
const os = require('os');
fs.appendFile('greetings.txt', 'Hello world');
var osinfo = os.cpus();
console.log(osinfo);
