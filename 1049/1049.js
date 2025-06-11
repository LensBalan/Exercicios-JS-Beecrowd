var input = require('fs').readFileSync('1049/stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim()); // tirar o /n que buga

let [carac1, carac2, carac3] = lines;

switch (carac1) {
    case "vertebrado":
        switch (carac2) {
            case "ave":
                switch (carac3) {
                    case "carnivoro":
                        console.log('aguia');
                        break;
                    case "onivoro":
                        console.log('pomba');
                        break;
                }
                break; 
            case "mamifero":
                switch (carac3) {
                    case "onivoro":
                        console.log('homem');
                        break;
                    case "herbivoro":
                        console.log('vaca');
                        break;
                }
                break; 
        }
        break; 

    case "invertebrado":
        switch (carac2) {
            case "inseto":
                switch (carac3) {
                    case "hematofago":
                        console.log('pulga');
                        break;
                    case "herbivoro":
                        console.log('lagarta');
                        break;
                }
                break; 
            case "anelideo":
                switch (carac3) {
                    case "hematofago":
                        console.log('sanguessuga');
                        break;
                    case "onivoro":
                        console.log('minhoca');
                        break;
                }
                break; 
        }
        break; 
}
