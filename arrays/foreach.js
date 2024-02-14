const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

notas.forEach(function (nota){
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`a média das notas eh ${media}`);

/* outra forma mais clara pra representar o que acontece acima
notas.forEach(somaDasNotas);

function somaDasNotas(nota){
    somaDasNotas += nota;
}
*/