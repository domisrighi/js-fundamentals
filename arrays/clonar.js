const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10];

console.log(notas);
console.log(novaListaNotas);

//usando o operador de espalhamento não precisa do push pois após o array acrescenta o contéudo.
//antes:
/*
const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas];

novaListaNotas.push(10);

console.log(notas);
console.log(novaListaNotas);
*/