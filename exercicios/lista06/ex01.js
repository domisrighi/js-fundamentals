/*1. Crie uma função que receba dois arrays e os concatene em um único array.*/

function meuArray (array1, array2){
    return array1.concat(array2);
}

const array1 = [20, 21, 22];
const array2 = [23, 24, 25];

const arraysConcats = meuArray(array1, array2);

console.log(arraysConcats);