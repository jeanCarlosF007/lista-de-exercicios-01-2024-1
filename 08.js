const prompt = require('prompt-sync')();

const firstValue = Number(prompt("Digite o primeiro valor: "));
const secondValue = Number(prompt("Digite o segundo valor: "));

const showInCrescentOrder = (firstNum, secondNum) => {
  if (firstValue === secondValue) {
    console.log("Os valores são iguais!");
  } else if (firstNum < secondNum) {
    console.log(firstNum, secondNum);
  } else {
    console.log(secondNum, firstNum);
  }
}

if (isNaN(firstValue) || isNaN(secondValue)) {
  console.log("Valor digitado inválido em ao menos um dos campos! Utilize apenas números!");
} else {
  showInCrescentOrder(firstValue, secondValue);
}
