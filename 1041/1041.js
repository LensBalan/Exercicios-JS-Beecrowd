var input = require('fs').readFileSync('1041/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines[0].split(' ').map(Number);

if (x === 0 && y === 0){
    console.log("Origem");
}else if(x === 0 && y !== 0){
    console.log('Eixo Y');
}else if(x !== 0 && y === 0){
    console.log('Eixo X');
}

if (x > 0 && y < 0) {
    console.log('Q4');
}else if (x > 0 && y > 0){
    console.log('Q1');
}

if (x < 0 && y > 0){
    console.log('Q2');
}else if (x < 0 && y < 0){
    console.log('Q3');
}
