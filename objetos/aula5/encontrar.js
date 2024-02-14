const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
};

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);
console.log(encontrado2);


//Alterado pois aqui estamos usandoigualdade estrita para encontrar num array
/*
return lista.find((item) => item[chave] === valor);
*/