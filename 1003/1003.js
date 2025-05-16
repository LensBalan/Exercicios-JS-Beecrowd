var input = require('fs').readFileSync('1003/stdin', 'utf8');
var lines = input.split('\n');
var entrada_int = lines.map(Number);

let A = entrada_int.shift();
let B = entrada_int.shift();

let SOMA = A + B;

console.log(`SOMA = ${SOMA}`);