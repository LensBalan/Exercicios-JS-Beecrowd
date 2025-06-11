var input = require('fs').readFileSync('1048/stdin', 'utf8');
var salario = parseFloat(input);

let percentual = 0;

function CalcPercentualReajuste (salario){
    if(salario >= 0.00 && salario <= 400.00){
        percentual = 15;
    }else if(salario >= 400.01 && salario <= 800.00){
        percentual = 12;
    }else if(salario >= 800.01 && salario <= 1200.00){
        percentual = 10;
    }else if(salario >= 1200.01 && salario <= 2000.00){
        percentual = 7;
    }else if(salario > 2000.00){
        percentual = 4;
    }
    return percentual;
}

function prints(salario, percentual){

    let reajusteGanho = (salario * percentual) / 100;
    let novoSalario = reajusteGanho + salario;
    
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
    console.log(`Em percentual: ${percentual} %`); 
}

prints(salario, CalcPercentualReajuste(salario));

