const prompt = require('prompt-sync')();
console.log("Vamos descobrir se um polígono com as seguintes medidas é um triângulo");

const sideOne = Number(prompt("Digite a medida do primeiro lado: "));
const sideTwo = Number(prompt("Digite a medida do segundo lado: "));
const sideThree = Number(prompt("Digite a medida do terceiro lado: "));

if (sideOne < 0 || sideTwo < 0 || sideThree < 0) {
  console.log("As medidas não podem conter valores negativos\n Programa encerrado");  
}

if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
  console.log("Os valores digitados devem ser números! \nPrograma encerrado!");
}

if (sideOne < (sideTwo + sideThree) && sideTwo < (sideOne + sideThree) && sideThree < (sideOne + sideTwo)) {
  if (sideOne === sideTwo && sideTwo === sideThree) {
    console.log("Trata-se de um triângulo EQUILÁTERO!");
  } else if (sideOne !== sideTwo && sideTwo !== sideThree && sideOne !== sideThree) {
    console.log("Trata-se de um triângulo ESCALENO!");
  } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
    console.log("Trata-se de um triângulo ISÓSCELES!");
  }
} else {
  console.log("Não é um triângulo!");
}
