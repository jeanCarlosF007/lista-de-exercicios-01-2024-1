const prompt = require('prompt-sync')();

const electorNumbers = Number(prompt("Digite o número de eleitores do município: "));
const blankVotes = Number(prompt("Digite o número de votos em branco: "));
const nullVotes = Number(prompt("Digite o número de votos nulos: "));
const validVotes = Number(prompt("Digite o número de votos válidos: "));
const totalVotes = blankVotes + nullVotes + validVotes;

const percentageOfBlank = (blankVotes/electorNumbers) * 100;
const percentageOfNull = (nullVotes / electorNumbers) * 100;
const percentageOfValid = (validVotes / electorNumbers) * 100;

if (isNaN(electorNumbers) || isNaN(blankVotes) || isNaN (nullVotes) || isNaN(validVotes)) {
  console.log("Algum dos valores digitados foi inválido! Utilize apenas números!");
  console.log("\n Sistema encerrado. \n");
} else if (totalVotes > electorNumbers){
  console.log("\n O número de votos total supera o número de eleitores \n");
  console.log("\n Sistema encerrado. \n");
} else {
  console.log(`
  Com relação ao total de eleitores, isto é, ${electorNumbers} pessoas, o percentual de votos foi:
  Votos em branco: ${percentageOfBlank}%;
  Votos nulos: ${percentageOfNull}%;
  Votos válidos: ${percentageOfValid}%;
`);
}
