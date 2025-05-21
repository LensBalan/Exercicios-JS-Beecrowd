var input = require('fs').readFileSync('1042/stdin', 'utf8');
var lines = input.split('\n');

let a = lines[0].split(' ').map(Number);
a_inicial = [...a]; //forma de copiar certo

a.sort((x,y) =>  x - y);

console.log(`${a[0]}\n${a[1]}\n${a[2]}`);
console.log(`\n${a_inicial[0]}\n${a_inicial[1]}\n${a_inicial[2]}`);