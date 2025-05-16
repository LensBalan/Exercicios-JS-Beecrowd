var input = require('fs').readFileSync('1005/stdin', 'utf8');
var lines = input.split('\n');
var entrada = lines.map(parseFloat);

let A = entrada.shift();
let B = entrada.shift();

console.log(`MEDIA = ${(((A*3.5)+(B*7.5))/11).toFixed(5)}`);