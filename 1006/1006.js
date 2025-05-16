var input = require('fs').readFileSync('1006/stdin', 'utf8');
var lines = input.split('\n');
var entrada = lines.map(parseFloat);

let [A,B,C] = entrada;

console.log(`MEDIA = ${(((A*2)+(B*3)+(C*5))/10).toFixed(1)}`);
