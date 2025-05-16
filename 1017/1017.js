var input = require('fs').readFileSync('1017/stdin', 'utf8');
var lines = input.split('\n');

let [tempoViagem, velMedia] = lines;

console.log(`${((tempoViagem * velMedia)/12).toFixed(3)}`);
