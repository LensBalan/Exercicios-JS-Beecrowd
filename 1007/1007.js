var input = require('fs').readFileSync('1007/stdin', 'utf8');
var lines = input.split('\n');
var entrada = lines.map(Number);

let [A,B,C,D] = entrada;

console.log(`DIFERENCA = ${(A * B - C * D)}`);