var input = require('fs').readFileSync('1004/stdin', 'utf8');
var lines = input.split('\n');
var entrada_int = lines.map(Number);

let A = entrada_int.shift();
let B = entrada_int.shift();

let PROD = A*B;

console.log(`PROD = ${PROD}`);