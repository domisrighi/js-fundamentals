/*1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.*/

let saldo = 500;
const deposito = 100;
const saque = 300;

const operacao = saldo + deposito;
const operacao2 = operacao - saque;

console.log(`saldo após deposito: ${operacao}`);
console.log(`saldo após saque: ${operacao2}`);