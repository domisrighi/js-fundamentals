// A função sort() organiza de forma alfabética, então precisa criar uma function e aplicar a regra.

function comparaOrganiza(a,b){
    if (a == b) return 0;
    if (a < b) return -1;
    if (b < a) return 1;
}

var lista = [3, 4, 19, 88];
console.log(lista.sort(comparaOrganiza));