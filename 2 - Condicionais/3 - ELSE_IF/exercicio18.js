// EXERCÍCIO 18: Consumo de Água
// <1L: Insuficiente,
//  1-2L: Adequado,
//  2-3L: Bom,
//  >3L: Excelente

// Seu código aqui:

let litrosAgua = 1.5;

if (litrosAgua < 1) {
  console.log("insuficiente");
} else if (litrosAgua <= 2) {
  console.log("Adequado");
} else if (litrosAgua <= 3) {
  console.log("Bom");
} else console.log("Excelente");
