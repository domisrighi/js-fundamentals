/*5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.*/

let clinicaFila = [];

clinicaFila.push("Gato");
clinicaFila.push("Cachorro");
clinicaFila.push("Passarinho");

console.log(`animais na fila de espera: ${clinicaFila.join(", ")}.`); //-> join() cria um espaço/separados entre os itens do array.

clinicaFila.pop(0);
clinicaFila.pop(1);
clinicaFila.pop(2);

console.log(`animais na fila de espera: ${clinicaFila}`);