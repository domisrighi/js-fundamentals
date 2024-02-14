/*4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.*/

function maiorNumero(num1, num2, num3) {
    let maior = num1;
  
    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }
    return maior;
  }
  
  console.log(maiorNumero(12, 56, 32));