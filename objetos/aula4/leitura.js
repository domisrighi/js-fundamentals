const dados = require("./cliente.json");

console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
console.log(typeof objetoCliente);