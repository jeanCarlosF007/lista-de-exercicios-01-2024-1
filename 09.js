const prompt = require('prompt-sync')();

const code = parseInt(prompt('Digite o código de origem do produto: '));

function verifyCode(code) {
  switch (true) {
    case code === 1:
      console.log("SUL");
      break;
    case code === 2:
      console.log("NORTE");
      break;
    case code === 3:
      console.log("LESTE");
      break;
    case code === 4:
      console.log("OESTE");
      break;
    case (code === 5 || code === 6):
      console.log("NORDESTE");
      break;
    case (code >= 7 && code <= 9):
      console.log("SUDESTE");
      break;
    case (code >= 10 && code <= 20):
      console.log("CENTRO-OESTE");
      break;
    case (code >= 25 && code <= 50):
      console.log("NORDESTE");
      break;
    default:
      console.log("PRODUTO IMPORTADO");
  }
}

verifyCode(code);
