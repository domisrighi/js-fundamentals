const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);



//acima temos uma arrow function, que seria a mesma coisa que o exemplo abaixo (porém esse incluindo a function em si não eh a melhor forma)
const notas2 = [10, 9.5, 8];

const notas2Atualizadas = notas2.map(function (nota){
    if(nota + 1 >= 10){
        return nota = 10;
    } else{
        return nota + 1;
    }
})

console.log(notas2Atualizadas);