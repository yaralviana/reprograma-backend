function recebeLetra() {
    return prompt("Introduza uma letra"); //recebe a letra inserida pelo usuário
}

function letraVogal(caracter) { //verifica se a letra inserida é uma vogal
    switch (caracter) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":  
        case "o":
        case "O":
        case "u":
        case "U": 
            return true;
        default:
            return false;
    }
}

var letra = recebeLetra();
if (letraVogal(letra)) alert("A letra é vogal"); //imprime se a letra é vogal ou consoante
else alert("A letra é consoante");