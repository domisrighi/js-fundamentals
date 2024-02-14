/*5. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.*/

let matriz = [];
let contador = 1;

for(let i = 0; i < 3; i++){
    linha = [];
    for(let j = 0; j < 3; j++){
        linha.push(contador++);
    }
    matriz.push(linha);
}

console.log(matriz.join("\n"));

//visualização em linhas e colunas:
matriz.forEach(row => console.log(row));