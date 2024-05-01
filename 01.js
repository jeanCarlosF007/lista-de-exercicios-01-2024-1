const prompt = require('prompt-sync')();
let calculate = true;

do {
  const temperatureInCelsius = prompt("Digite o valor da temperatura em ºC para ser convertido para Fahrenheit (ou 's' para sair): ");
  if (temperatureInCelsius === 's') {
    console.log("\n Você saiu do sistema! \n");
    calculate = false;
  } else if (isNaN(Number(temperatureInCelsius))) {
    console.log("\n Valor digitado inválido! Utilize apenas números! \n");
    continue;
  } else {
    const temperatureInFahrenheit = (1.8 * Number(temperatureInCelsius)) + 32;
    console.log(`\n ${temperatureInCelsius} ºC equivale a ${temperatureInFahrenheit} ºF \n`);
  }
} while (calculate);