let nota = 9.75;
let novaNota = nota;

nota = 10;

console.log(nota);
console.log(novaNota);

//atribuicao por referencia, usando spread operator
const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10];

console.log(notas);
console.log(novaListaNotas);