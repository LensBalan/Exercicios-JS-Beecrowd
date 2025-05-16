var input = require('fs').readFileSync('1001/stdin', 'utf8');
var lines = input.split('\n');
let entrada_int = lines.map(Number);

let A = entrada_int.shift();
let B = entrada_int.shift();

let X = A + B;
console.log(`X = ${X}`);