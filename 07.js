const prompt = require('prompt-sync')();

const boughtApples = Number(prompt("Digite o número de maçãs compradas: "));

function calculateFinalPrice(numberOfApples) {
  let finalPrice = 0;
  if (numberOfApples < 12) {
    finalPrice = 0.3 * numberOfApples;
  } else {
    finalPrice = 0.25 * numberOfApples;
  }
  return finalPrice.toFixed(2);
}

if (isNaN(boughtApples)) {
  console.log("Valor digitado inválido! Utilize apenas números!\nSistema encerrado");
} else if (boughtApples < 0) {
  console.log("Você não pode utilizar valores negativos!\nSistema encerrado.");
} else if (!Number.isInteger(boughtApples)) {
  console.log("Você deve digitar apenas números inteiros!\nSistema encerrado.");
} else {
  console.log(`Para ${boughtApples} maçãs, o valor final fica: R$${calculateFinalPrice(boughtApples)}`);
}