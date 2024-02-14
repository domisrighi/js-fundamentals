/*5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.*/

const frase = "eu sou uma frase";
const fraseEmCaps = frase.toUpperCase();


console.log(frase.toUpperCase());
console.log(`a frase "${fraseEmCaps}" em maiúscula, e fica assim "${frase.toLowerCase()}" em minúscula.`);
console.log(`usando slice pra tirar o "eu + espaço": ${frase.slice(3)}`);