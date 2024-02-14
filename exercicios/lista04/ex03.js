/*3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.*/

function ehPalindromo(palavra){
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === palavraInvertida.toLowerCase();
}

console.log(ehPalindromo("ama"));
console.log(ehPalindromo("exemplo"));