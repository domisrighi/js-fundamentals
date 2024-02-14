/*3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.*/

let meuArray = [];

meuArray.push(22, 34, 78);
console.log(meuArray);

meuArray[0] *= meuArray[0];
console.log(`índice zero com o dobro do seu valor: ${meuArray}`);