var input = require('fs').readFileSync('1018/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines[0]);
let notas100 = 0, notas50 = 0, notas20 = 0, notas10 = 0, notas5 = 0, notas2 = 0, notas1 = 0;
console.log(valor);

while(valor > 0){
    if(valor >= 100){
        valor -= 100;
        notas100 += 1;
    }else if(valor >= 50){
        valor -= 50;
        notas50 += 1;
    }else if(valor >= 20){
        valor -= 20;
        notas20 += 1;
    }else if(valor >= 10){
        valor -= 10;
        notas10 += 1;
    }else if(valor >= 5){
        valor -= 5;
        notas5 += 1;
    }else if(valor >= 2){
        valor -= 2;
        notas2 += 1;
    }else if(valor >= 1){
        valor -= 1;
        notas1 += 1;
    }
}

console.log(`${notas100} nota(s) de R$ 100,00`);
console.log(`${notas50} nota(s) de R$ 50,00`);
console.log(`${notas20} nota(s) de R$ 20,00`);
console.log(`${notas10} nota(s) de R$ 10,00`);
console.log(`${notas5} nota(s) de R$ 5,00`);
console.log(`${notas2} nota(s) de R$ 2,00`);
console.log(`${notas1} nota(s) de R$ 1,00`);