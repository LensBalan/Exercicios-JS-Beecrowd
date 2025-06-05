var input = require('fs').readFileSync('1040/stdin', 'utf8');
var lines = input.split('\n');

let notas = lines[0].split(" ").map(parseFloat);
let notaExame = parseFloat(lines[1]);

function calculaMedia(notas){
    let media = (((notas[0] * 2) + (notas[1] * 3) + (notas[2] * 4) + (notas[3])) / 10);
    return parseFloat(media);
}

function situacaoAluno(media, notaExame){
    if(media >= 7.0){
        console.log(`Media: ${media.toFixed(1)}`);
        console.log("Aluno aprovado.");
    }else if(media < 5.0){
        console.log(`Media: ${media.toFixed(1)}`);
        console.log("Aluno reprovado.");
    }else if(media >= 5.0 && media <= 6.9){
        console.log(`Media: ${media.toFixed(1)}`);
        console.log("Aluno em exame.");

        console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
        let mediaExame = (media + notaExame) / 2;

        if(mediaExame >= 5.0){
            console.log("Aluno aprovado.");
            console.log(`Media final: ${mediaExame.toFixed(1)}`);
        }else if (mediaExame <= 4.9){
            console.log("Aluno reprovado.");
            console.log(`Media final: ${mediaExame.toFixed(1)}`);
        }
    }
}

situacaoAluno(calculaMedia(notas), notaExame);