const prompt = require('prompt-sync')();

const userValues = [];
const valuesWeights = [];
let value;
let weight;

while (true) {
  value = parseFloat(prompt('Digite um número decimal ou zero (0) para sair: '));
  if(value === 0) break;
  if (isNaN(value) || Number.isInteger(value)) continue;
  userValues.push(value);

  weight = parseFloat(prompt('Digite o peso para o valor especificado anteriormente'));
  if (isNaN(weight)) {
    userValues.pop();
    continue;
  }
  valuesWeights.push(weight);
}

console.log(userValues, valuesWeights)

let sumProducts = 0;
let sumWeights = 0;

let i = 0;

while (i < userValues.length) {
  sumProducts += userValues[i] * valuesWeights[i];
  sumWeights += valuesWeights[i];
  i++;
}

const weightedAverage = sumProducts / sumWeights;

console.log(weightedAverage);
