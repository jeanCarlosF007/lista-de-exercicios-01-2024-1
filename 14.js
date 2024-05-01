const prompt = require('prompt-sync')();

const userNumbers = [];
let decimalNumber;

while (decimalNumber !== 0) {
  decimalNumber = parseFloat(prompt('Digite um número decimal ou zero (0) para calcular a média - inteiros não são levados em conta: '));
  if (isNaN(decimalNumber) || (Number.isInteger(decimalNumber) && decimalNumber !== 0)) continue;
  if (decimalNumber !== 0) userNumbers.push(decimalNumber);
}

let sum = 0;
let i = 0;
while (i < userNumbers.length) {
  sum += userNumbers[i++];
}

const arithmeticMean = sum / userNumbers.length;
console.log(arithmeticMean);
