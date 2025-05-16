var input = require('fs').readFileSync('1016/stdin', 'utf8');
var lines = input.split('\n');

let dist = lines[0];
console.log(`${dist*2} minutos`);
