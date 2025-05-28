var input = require('fs').readFileSync('1043/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C] = lines[0].split(' ').map(Number);

function ChecaTriangulo (A,B,C) {
    if(((A + B) > C) && ((A + C) > B) && ((C + B) > A)){
        console.log(`Perimetro = ${(A+B+C).toFixed(1)}`);
    }else{
        console.log(`Area = ${(((A+B)*C) / 2.0).toFixed(1)}`)
    }
}

ChecaTriangulo(A,B,C);