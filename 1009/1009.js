var input = require('fs').readFileSync('1009/stdin', 'utf8');
var lines = input.split('\n');
var entrada = lines.map(parseFloat);
entrada.shift();

let [fixo,comissao] = entrada;

console.log(`TOTAL = R$ ${(fixo +(comissao *0.15)).toFixed(2)}`);