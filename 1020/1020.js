var input = require('fs').readFileSync('1020/stdin', 'utf8');
var lines = input.split('\n');

let dias = parseInt(lines[0]);
let anos = 0, meses = 0;

while(dias > 29){
    if(dias >= 365){
        dias -= 365;
        anos += 1;
    }else{
        dias -= 30;
        meses += 1;
    }
}
console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`);