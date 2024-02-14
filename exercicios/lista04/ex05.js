/*5. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.*/

const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`o resultado de ${base} elevado a ${expoente} eh: ${resultado}`);