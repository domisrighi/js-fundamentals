function funcaoUm (executarFuncao) {
    console.log('Eu sou uma simples funcao')
    executarFuncao()
}

function funcaoDois() {
    console.log('Eu sou um callback')
}

function main() {
    funcaoUm(funcaoDois)
}

main()