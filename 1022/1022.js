var input = require('fs').readFileSync('1022/stdin', 'utf8');
var lines = input.split('\n');

let reps = parseFloat(lines[0]);

let linha, N1, D1, N2, D2, barra, sinal;
let resultado = [];

for(let i = 0; i < reps; i++){
    linha = lines[i+1];

    [N1,barra,D1,sinal,N2,barra,D2] = linha.split(' ');

    switch(sinal){
        case '+':
            resultado[0] = parseInt(N1*D2 + N2*D1); 
            resultado[1] = parseInt(D1*D2);
            break;
        case '-':
            resultado[0] = parseInt(N1*D2 - N2*D1); 
            resultado[1] = parseInt(D1*D2);
            break;
        case '*':
            resultado[0] = parseInt(N1*N2);
            resultado[1] = parseInt(D1*D2);
            break;
        case '/':
            resultado[0] = parseInt(N1*D2);
            resultado[1] = parseInt(N2*D1);
            break;
    }

    let [numeradorSimplificado, denominadorSimplificado] = simplificarFracao(resultado[0], resultado[1]);

    if(denominadorSimplificado < 0){
        denominadorSimplificado = denominadorSimplificado * -1;
        numeradorSimplificado = numeradorSimplificado * -1;
    }

    console.log(`${resultado[0]}/${resultado[1]} = ${numeradorSimplificado}/${denominadorSimplificado}`);
}

function mdc (numerador,denominador){
    while(denominador !== 0){
        let temp = denominador;

        denominador = numerador % denominador;  
        numerador = temp;
    }
    return numerador;
}

function simplificarFracao (numerador,denominador){
    let divisor = mdc(numerador,denominador);
    let numeradorResul = numerador / divisor;
    let denominadorResul = denominador / divisor;

    return [numeradorResul, denominadorResul];
}
