var input = require('fs').readFileSync('1046/stdin', 'utf8');
var lines = input.split('\n');

let [inicio, fim] = lines[0].split(" ").map(Number);

if(inicio < fim){
    console.log(`O JOGO DUROU ${fim-inicio} HORA(S)`);
}

if(inicio > fim){
    console.log(`O JOGO DUROU ${(24 - inicio) + fim} HORA(S)`);
}

if (inicio === fim){
     console.log(`O JOGO DUROU 24 HORA(S)`);
}