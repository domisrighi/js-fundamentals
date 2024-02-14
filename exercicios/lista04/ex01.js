/*1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.*/

function saudacao(nome) {
    return `olá ${nome}, seja bem vindo(a)!`;
}

const cumprimentos = saudacao("ana");

console.log(cumprimentos);