// EXERCÍCIO 8: Tamanho de Camiseta
// Altura: <1.60: P,
// 1.60-1.75: M,
//  1.76-1.85: G,
//  >1.85: GG

// Seu código aqui:

let altura = 1.72;

if (altura < 1.6) {
  console.log("P");
} else if (altura >= 1.6 && altura <= 1.75) {
  console.log("M");
} else if (altura >= 1.76 && altura <= 1.85) {
  console.log("G");
} else if (altura > 1.85) {
  console.log("GG");
} else {
  console.log("altura invalida!");
}
