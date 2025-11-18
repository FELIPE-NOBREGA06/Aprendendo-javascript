// EXERCÍCIO 14: Nível de Glicose
// <70: Hipoglicemia, 70-99: Normal, 100-125: Pré-diabetes, >125: Diabetes

let glicose = 95;
// Seu código aqui:

if (glicose < 70) {
  console.log("hipoglicemia");
} else if (glicose >= 70 && glicose <= 99) {
  console.log("Normal");
} else if (glicose >= 100 && glicose <= 125) {
  console.log("Pré-diabetes");
} else if (glicose > 125) {
  console.log("Diabetes");
} else {
  console.log("Invalido");
}
