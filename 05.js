const prompt = require('prompt-sync')();
let verifyGrades = true;

while (verifyGrades) {
  const firstGrade = Number(prompt("Digite a primeira nota do aluno: "));
  const secondGrade = Number(prompt("Digite a segunda nota do aluno: "));

  if (isNaN(firstGrade) || isNaN(secondGrade)) {
    console.log("Ambos os valores devem ser números!");
    continue;
  } else if (firstGrade > 10 || firstGrade < 0 || secondGrade > 10 || secondGrade < 0) {
    console.log("As notas não podem ser superiores a 10 nem inferiores a 0!");
    continue;
  }
  const semesterAverage = (firstGrade + secondGrade) / 2;
  if (semesterAverage >= 6) {
    console.log("PARABÉNS! Você foi aprovado");
    verifyGrades = false;
  } else {
    console.log("Você foi REPROVADO! Estude mais");
    verifyGrades = false;
  }
}
