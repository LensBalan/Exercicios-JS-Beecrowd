var input = require('fs').readFileSync('1010/stdin', 'utf8');
var lines = input.split('\n');
var peca1 = lines[0];
var peca2 = lines[1];

let [id, qnt, preco] = peca1.split(' ');
let [id2, qnt2, preco2] = peca2.split(' ');

console.log(`VALOR A PAGAR: R$ ${((qnt*preco) + (qnt2*preco2)).toFixed(2)}`);
