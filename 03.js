const prompt = require('prompt-sync')();

const firstNumber = Number(prompt("Digite o primeiro número (deve ser inteiro): "));
const secondNumber = Number(prompt("Digite o segundo número (deve ser inteiro): "));
const thirdNumber = Number(prompt("Digite o terceiro número (deve ser inteiro): "));
let fourthNumber = Number(prompt("Digite o quarto número (deve ser inteiro): "));

const sumTwentyFiveToTheFirstNumber = (num) => {
  return firstNumber + 25;
}

const tripleSecondNumber = (num) => {
  return secondNumber * 3;
}

const twelvePercentOfTheThirdNumber = (num) => {
  return 12/100 * thirdNumber;
}

const transformFourthInSumOfThreeFirst = (num) => {
  fourthNumber = firstNumber + secondNumber + thirdNumber;
  return fourthNumber;
}

if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || !Number.isInteger(thirdNumber) || !Number.isInteger(fourthNumber)) {
  console.log("\n Todos os números devem ser inteiros! \n Programa encerrado.");
} else {
  console.log(`
  Primeiro número (${firstNumber}) somado a 25: ${sumTwentyFiveToTheFirstNumber(firstNumber)}
  Segundo número (${secondNumber}) triplicado: ${tripleSecondNumber(secondNumber)}
  12% do terceiro número (${thirdNumber}): ${twelvePercentOfTheThirdNumber(thirdNumber)}
  Quarto número (${fourthNumber}) transformado na soma dos três primeiros: ${transformFourthInSumOfThreeFirst(fourthNumber)}
  `);
}

