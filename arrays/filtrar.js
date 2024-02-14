const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length < 4;
});

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(tamanhoNome);
console.log(reprovados);

//demarca um parâmetro com anderline (_) pra quando não vai utilizar no momento ele, então vai 'pular' e usar o seguinte.