// EXERCÍCIO 29: Consumo de Combustível
// <8km/l: Alto, 8-12: Médio, 13-16: Baixo, >16: Muito baixo
// Seu código aqui:

let consumo = 11;

if (consumo < 8) {
  console.log("Alto");
} else if (consumo >= 8 && consumo <= 12) {
  console.log("Médio");
} else if (consumo >= 13 && consumo <= 16) {
  console.log("Baixo");
} else {
  console.log("Muito baixo");
}
