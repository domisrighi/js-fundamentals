const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(numero){
    return numero * 10;
}

const novoArray = arrayNums.map(multiplicaPorDez);

console.log(novoArray);