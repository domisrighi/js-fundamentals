const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555050", "1144984450"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: R$ ${this.saldo}.`);
        }
    }
};

cliente.efetuaPagamento(25);