var input = require('fs').readFileSync('1045/stdin', 'utf8');
var numeros = input.split(" ").map(parseFloat);

numeros.sort (function(a, b){
    return b - a;
});

let [A, B, C] = numeros;

if(A >= (B+C)){
    console.log("NAO FORMA TRIANGULO");
    return;
}

if(Math.pow(A,2) === (Math.pow(B,2) + Math.pow(C,2))){
    console.log("TRIANGULO RETANGULO");
}

if(Math.pow(A,2) > (Math.pow(B,2) + Math.pow(C,2))){
    console.log("TRIANGULO OBTUSANGULO");
}

if(Math.pow(A,2) < (Math.pow(B,2) + Math.pow(C,2))){
    console.log("TRIANGULO ACUTANGULO");
}

if((A === B) && (B == C)){
    console.log("TRIANGULO EQUILATERO");
}else if((A === B) || (B === C) || (A === C)){
     console.log("TRIANGULO ISOSCELES");
}