var input = require('fs').readFileSync('1015/stdin', 'utf8');
var lines = input.split('\n');

let [x1,y1] = lines[0].split(' ');
let [x2,y2] = lines[1].split(' ');

let dist = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2));
console.log(dist.toFixed(4));
