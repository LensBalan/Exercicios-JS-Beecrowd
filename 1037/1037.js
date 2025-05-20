var input = require('fs').readFileSync('1037/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseFloat(lines[0]);

if (numero >= 0 && numero <= 25.0000) {
    console.log('Intervalo [0,25]');
} else if (numero > 25 && numero <= 50.0000) {
    console.log('Intervalo (25,50]');
} else if (numero > 50 && numero <= 75.0000) {
    console.log('Intervalo (50,75]');
} else if (numero > 75 && numero <= 100.0000) {
    console.log('Intervalo (75,100]');
} else {
    console.log('Fora de intervalo');
}

//Não da pra usar Switch case