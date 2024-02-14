/*1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.*/

const arrayEsparso = [1, 3, 7];

arrayEsparso[0] = "Elemento 1";
arrayEsparso[1] = "Elemento 3";
arrayEsparso[2] = "Elemento 7";

console.log(arrayEsparso);
console.log(arrayEsparso.length);