const estudanteReprovou = function (notaFinal, faltas){
    if (notaFinal < 7 && faltas > 4){
        return true;
    } else {
        return false;
    }
}
console.log(estudanteReprovou(8, 4));
console.log(estudanteReprovou(6, 5));