/*7. Adicione um novo elemento (por exemplo, 15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.*/

let matriz = [];
let contador = 1;

for(let i = 0; i < 3; i++){
    linha = [];
    for(let j = 0; j < 3; j++){
        linha.push(contador++);
    }
    matriz.push(linha);
}

console.log("Matriz original:");
matriz.forEach(row => console.log(row));

matriz [2][1] = 21;

console.log("Add novo elemento na terceira linha e segunda coluna:");
matriz.forEach(row => console.log(row));