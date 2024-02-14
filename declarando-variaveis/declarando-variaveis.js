// Usando VAR
// se não declarar a variável area vai funcionar e aparecer mesmo assim no console.
/*
var altura = 5;
var comprimento = 7;
area = altura * comprimento;

console.log(area);
var area;
*/

// Usando LET
// não pode declarar no final.
/*
let forma = "retângulo";
let altura = 5;
let comprimento = 7;
let area

if (forma === "retângulo"){
    area = altura * comprimento;
} else {
    area =(altura * comprimento) / 2;
}

console.log(area);
*/

//Usando CONST
//

const forma = "triângulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado"){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);