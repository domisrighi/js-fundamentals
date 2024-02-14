/*4. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.*/

const menuPrincipal = ["Macarrão com molho branco", "Panquecas 4 queijos", "Berinjela à parmegiana"];
const menuDeSobremesas = ["Petit gâteau", "Pavê", "Pudim"];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(`Menu principal: ${menuPrincipal.join(", ")}`);
console.log(`Menu de sobremesas: ${menuDeSobremesas.join(", ")}`);
console.log(`Menu completo: ${menuCompleto.join(", ")}`);