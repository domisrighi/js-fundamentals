const texto1 = 'ola mundo';
const texto2 = "ola mundo";

const senha = "senha123";

// Exemplo de quando usar aspas simples e duplas:

const citacao = 'a citação eh "alguma por ai"!';
console.log(citacao);

// Concatenação (+):
const meuNome = "domis";
const frase = ", tenho 22 anos";
console.log(meuNome + frase);

// Transformação/conversão do código Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Métodos para strings:

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


// template string OU tamplate literal: PESQUISAR
