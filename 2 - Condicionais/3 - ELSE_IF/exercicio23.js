// EXERCÍCIO 23: Nível de Poluição Sonora
// <50dB: Silencioso, 50-70: Moderado, 71-85: Alto, >85: Prejudicial

// Seu código aqui:

let decibeis = 65;

if (decibeis < 50) {
  console.log("Silencioso");
} else if (decibeis <= 70) {
  console.log("Moderado");
} else if (decibeis <= 85) {
  console.log("Alto");
} else console.log("Prejudicial");
