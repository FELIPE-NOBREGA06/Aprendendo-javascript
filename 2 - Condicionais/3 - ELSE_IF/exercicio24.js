// EXERCÍCIO 24: Categoria de Peso (Boxe)
// <57kg: Pena, 57-67: Leve, 68-79: Médio, 80-91: Pesado, >91: Super-pesado

// Seu código aqui:

let peso = 75;

if (peso < 57) {
  console.log("Pena");
} else if (peso >= 57 && peso <= 67) {
  console.log("Leve");
} else if (peso >= 68 && peso <= 79) {
  console.log("Médio");
} else if (peso >= 80 && peso <= 91) {
  console.log("Pessado");
} else {
  console.log("Super-pesado");
}
