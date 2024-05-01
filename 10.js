const prompt = require('prompt-sync')();

const userNumber = Number(prompt("Digite um número inteiro: "));

if (!Number.isInteger(userNumber)) {
  console.log('O número digitado não é um inteiro.\nSistema encerrado');
} else {
  for (let i = 0; i < 10; i++) {
    console.log(userNumber);
  }
}
