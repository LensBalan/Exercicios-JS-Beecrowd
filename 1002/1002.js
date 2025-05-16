var input = require('fs').readFileSync('1002/stdin', 'utf8');
var lines = input.split('\n');
entrada = lines.map(parseFloat);

const n = 3.14159;

console.log(`A=${(n*(entrada[0]*entrada[0])).toFixed(4)}`);