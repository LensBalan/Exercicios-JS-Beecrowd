var input = require('fs').readFileSync('1021/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines[0]);
let valor_inteiro = parseInt(valor);
let valor_moedas = parseInt((valor - valor_inteiro)*100);

let notas100 = 0, notas50 = 0, notas20 = 0, notas10 = 0, notas5 = 0, notas2 = 0;
let moedas1 = 0, moedas50 = 0, moedas25 = 0, moedas10 = 0, moedas5 = 0, moedas01 = 0;

while(valor_inteiro >= 1){
    if(valor_inteiro >= 100){
        valor_inteiro -= 100;
        notas100 += 1;
    }else if(valor_inteiro >= 50){
        valor_inteiro -= 50;
        notas50 += 1;
    }else if(valor_inteiro >= 20){
        valor_inteiro -= 20;
        notas20 += 1;
    }else if(valor_inteiro >= 10){
        valor_inteiro -= 10;
        notas10 += 1;
    }else if(valor_inteiro >= 5){
        valor_inteiro -= 5;
        notas5 += 1;
    }else if(valor_inteiro >= 2){
        valor_inteiro -= 2;
        notas2 += 1;
    }
    else if(valor_inteiro >= 1){
        valor_inteiro -= 1;
        moedas1 += 1;
    }
}

while(valor_moedas > 0){
    if(valor_moedas >= 50){
        valor_moedas -= 50;
        moedas50 += 1;
    }else if(valor_moedas >= 25){
        valor_moedas -= 25;
        moedas25 += 1;
    }else if(valor_moedas >= 10){
        valor_moedas -= 10;
        moedas10 += 1;
    }else if(valor_moedas >= 5){
        valor_moedas -= 5;
        moedas5 += 1;
    }else if(valor_moedas >= 1){
        valor_moedas -= 1;
        moedas01 += 1;
    }  
}

console.log(`NOTAS:\n${notas100} nota(s) de R$ 100.00`);
console.log(`${notas50} nota(s) de R$ 50.00`);
console.log(`${notas20} nota(s) de R$ 20.00`);
console.log(`${notas10} nota(s) de R$ 10.00`);
console.log(`${notas5} nota(s) de R$ 5.00`);
console.log(`${notas2} nota(s) de R$ 2.00`);

console.log(`MOEDAS:\n${moedas1} moeda(s) de R$ 1.00`);
console.log(`${moedas50} moeda(s) de R$ 0.50`);
console.log(`${moedas25} moeda(s) de R$ 0.25`);
console.log(`${moedas10} moeda(s) de R$ 0.10`);
console.log(`${moedas5} moeda(s) de R$ 0.05`);
console.log(`${moedas01} moeda(s) de R$ 0.01`);