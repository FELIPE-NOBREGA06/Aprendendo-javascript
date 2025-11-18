// EXERCÍCIO 1: Classificação de Notas
// 9-10: A, 7-8.9: B, 5-6.9: C, 0-4.9: D

let nota = 8.5;
// Seu código aqui:

if (nota >= 9 && nota <= 10) {
  console.log("Nota A");
} else if (nota >= 7 && nota <= 8.9) {
  console.log("Nota B");
} else if (nota >= 5 && nota <= 6.9) {
  console.log("Nota C");
} else {
  console.log("Nota D");
}
