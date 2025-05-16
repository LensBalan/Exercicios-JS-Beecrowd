var input = require('fs').readFileSync('1019/stdin', 'utf8');
var lines = input.split('\n');

let segundos = parseInt(lines[0]);
let horas = 0, minutos = 0;

while(segundos > 59){
    if(segundos >= 3600){
        segundos -= 3600;
        horas += 1;
    }else if(segundos >= 60){
        segundos -= 60;
        minutos += 1;
    }
}

console.log(`${horas}:${minutos}:${segundos}`);