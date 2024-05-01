const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
  let n = prompt("Digite um número inteiro: ");
  
  if (!Number.isInteger(Number(n))) {
    console.log('O valor digitado não é um inteiro!\nPrograma encerrado!');
    i = 5;
  } else {
    for (let i = 1; i <= n; i++) {
      console.log(`${i} x ${n} = ${i*n}`);
    }
  }
};
