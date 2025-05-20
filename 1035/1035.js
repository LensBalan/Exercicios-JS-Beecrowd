var input = require('fs').readFileSync('1035/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C,D] = lines[0].split(' ');

let CmaisD = C + D;
let AmaisB = A + B;

if(B > C && D > A && CmaisD > AmaisB && C >= 0 && D >= 0 && A%2 === 0 ){
    console.log('Valores aceitos');
}else{
    console.log('Valores nao aceitos');
}