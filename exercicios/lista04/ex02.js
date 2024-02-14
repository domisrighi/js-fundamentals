/*2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.*/

function maiorDeIdade(idade){
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

const pessoa = maiorDeIdade(18);

console.log(`Essa pessoa eh maior de idade? ${pessoa}`);

//outro forma:
function verificaMaioridade(idade) {
    if (idade >= 18) {
        return 'É maior de idade.';
    } else {
        return 'É menor de idade.';
    }
}

console.log(verificaMaioridade(25));
console.log(verificaMaioridade(15));