var input = require('fs').readFileSync('1008/stdin', 'utf8');
var lines = input.split('\n');
var entrada = lines.map(parseFloat);

let [num, horasTrab, ganho_hora] = entrada;

console.log(`NUMBER = ${num}\nSALARY = U$ ${(horasTrab*ganho_hora).toFixed(2)}`);