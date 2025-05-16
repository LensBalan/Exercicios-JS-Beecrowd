var input = require('fs').readFileSync('1011/stdin', 'utf8');
var lines = input.split('\n');
var [raio] = lines.map(parseFloat);

let pi = 3.14159

console.log(`VOLUME = ${((4/3.0) * pi * (raio*raio*raio)).toFixed(3)}`);