const prompt = require('prompt-sync')();
let continueExecuting = true;

console.log('O programa abaixo terá sua execução encerrada se você digitar um valor negativo ou não digitar nada.');

while (continueExecuting) {
  let entryValue = prompt('Digite um número inteiro: ');

  entryValue = entryValue < 0 || entryValue === '' ? null : entryValue;

  if (entryValue === null) {
    console.log('\nVocê saiu do programa!');
    continueExecuting = false;
  } else if (!Number.isInteger(Number(entryValue))) {
    console.log('\nO valor digitado não é um número inteiro!\n');
  } else if (entryValue % 2 === 0) {
    console.log(`\n${entryValue} é PAR!\n`);
  } else {
    console.log(`\n${entryValue} é ÍMPAR!\n`);
  }
}
