const cliente = {
    nome: "André",
    idade: 32,
    cpf: "111222333444",
    email: "andre@dominio.com",
};

console.log(`o nome do cliente eh ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}.`);