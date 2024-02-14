function exibirInfosEstudante(nome, nota){
    return `o nome do(a) estudante eh ${nome} e sua nota foi ${nota}.`;
}

console.log(exibirInfosEstudante('caroline', 9));
console.log(exibirInfosEstudante('ana', 7));

//quando a function tem mais de mais de um bloco, no caso 2 return
function dividir(dividendo, divisor) {
    if (divisor !== 0) {
      return dividendo / divisor;
    } else {
      return "favor não dividir por zero";
    }
   }
   
   const resultado = dividir(10, 5);
   console.log(resultado);

   const resultadoZero = dividir(10, 0);
   console.log(resultadoZero);
   