var input = require('fs').readFileSync('1038/stdin', 'utf8');
var lines = input.split('\n');

let [id, qnt] = lines[0].split(' ').map(Number);

switch (id) {
    case 1:
        console.log(`Total: R$ ${(4.00*qnt).toFixed(2)}`);
        break;
    case 2:
        console.log(`Total: R$ ${(4.50*qnt).toFixed(2)}`);
        break;
    case 3:
        console.log(`Total: R$ ${(5.00*qnt).toFixed(2)}`);
        break;
    case 4:
        console.log(`Total: R$ ${(2.00*qnt).toFixed(2)}`);
        break;
    case 5:
        console.log(`Total: R$ ${(1.50*qnt).toFixed(2)}`);
        break;
}