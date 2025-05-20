var input = require('fs').readFileSync('1036/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C] = lines[0].split(' ').map(Number);

let delta, r1, r2;

delta = Math.pow(B,2) - 4 * A * C;
r1 = (-B + Math.sqrt(delta)) / (2*A);
r2 = (-B - Math.sqrt(delta)) / (2*A);


if(A === 0 || delta < 0.0){
    console.log('Impossivel calcular');
}else{
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}