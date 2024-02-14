/*5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.*/

/*
var frutaUm = "kiwi";

if (4 > 0) {
    var frutaDois = "banana";
    console.log(frutaDois);
    console.log(frutaUm);
}

console.log(frutaDois);
console.log(frutaUm);
*/
console.log("testando com let");

let frutaUm = "kiwi";

if (4 > 0) {
    let frutaDois = "banana";
    console.log(frutaDois);
    console.log(frutaUm);
}

console.log(frutaDois);
console.log(frutaUm);
//-> mostra "banana" do if e "kiwi" global, e no fim dá um erro pois frutaDois não foi definida na global.