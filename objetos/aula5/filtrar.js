const clientes = require("./clientes.json");

function filtrarAptosSemComplementos(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarAptosSemComplementos(clientes);

console.log(filtrados);