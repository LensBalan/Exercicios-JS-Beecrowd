var input = require('fs').readFileSync('1044/stdin', 'utf8');
var lines = input.split('\n');

let [A,B] = lines[0].split(' ').map(Number);

if(A >= B){
    denominador = A;
    divisor = B;
}else{
    denominador = B;
    divisor = A;
}

if((denominador % divisor) === 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}