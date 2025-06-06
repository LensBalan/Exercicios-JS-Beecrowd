var input = require('fs').readFileSync('1047/stdin', 'utf8');
var lines = input.split('\n');

let [inicioHora, inicioMin, fimHora, fimMin] = lines[0].split(" ").map(Number);
let horasJogadas = 0;
let minutosJogados = 0;

//Tratamento horas e minutos
if (inicioHora < fimHora || (inicioHora === fimHora && inicioMin < fimMin)) {
    horasJogadas = fimHora - inicioHora;
    minutosJogados = fimMin - inicioMin;

    if (minutosJogados < 0) {
        minutosJogados += 60;
        horasJogadas -= 1;
    }

} else if (inicioHora > fimHora || (inicioHora === fimHora && inicioMin > fimMin)) {
    horasJogadas = (24 - inicioHora) + fimHora;
    minutosJogados = fimMin - inicioMin;

    if (minutosJogados < 0) {
        minutosJogados += 60;
        horasJogadas -= 1;
    }

} else {
    horasJogadas = 24;s
    minutosJogados = 0;
}

console.log(`O JOGO DUROU ${horasJogadas} HORA(S) E ${minutosJogados} MINUTO(S)`);