const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const listaNomesAtualizado = [...new Set(nomes)];

console.log(listaNomesAtualizado);


//O Set não tem acesso para usar métodos de arrays.
//Mas criando ele usando operador de espalhamento eh possível utilizar.
//Código acima simplificado, abaixo o original:
/*
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes);

const listaNomesAtualizado = [...nomesAtualizados];

console.log(nomesAtualizados);
console.log(nomesAtualizados);
*/