/*6. Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.*/

let matriz = [];
let contador = 1;

for(let i = 0; i < 3; i++){
    linha = [];
    for(let j = 0; j < 3; j++){
        linha.push(contador++);
    }
    matriz.push(linha);
}

matriz.forEach(row => console.log(row));

console.log(`Elemento na segunda linha e terceira coluna: ${matriz[1][2]}`);