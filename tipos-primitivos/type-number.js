// TIPO NUMBER

const meuNumero = 3;

const primeiroNum = 1;
const segundoNum = 2;
const resultadoSoma = primeiroNum + segundoNum;

console.log(resultadoSoma);

// PONTO FLUTUANTE

const primeiroNumFlutuante = 3.3;
const segundoNumFlutuante = .5;
const resultadoFlutuante = primeiroNum / primeiroNumFlutuante;

console.log(resultadoFlutuante);

// NaN - Not A Number

const teste = "teste";
resultadoOutro = teste * meuNumero
console.log(teste * primeiroNum);
console.log(resultadoOutro);

//Usando Parse pra uma string virar number

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5');

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
console.log('a média eh ' + total.toFixed(2));


// Guardando resultados de operações:

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

console.log(operacao);