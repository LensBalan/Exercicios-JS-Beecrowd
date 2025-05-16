var input = require('fs').readFileSync('1014/stdin', 'utf8');
var lines = input.split('\n');
var entrada = lines.map(Number);

let [km, litros] = entrada;

console.log(`${(km/litros).toFixed(3)} km/l`);
