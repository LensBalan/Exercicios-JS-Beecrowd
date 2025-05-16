var input = require('fs').readFileSync('1013/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C] = lines[0].split(' ').map(Number);

let maiorAB = (A+B+Math.abs(A-B))/2;
let maiorTotal = (maiorAB+C+Math.abs(maiorAB-C))/2;

console.log(`${maiorTotal} eh o maior`);
