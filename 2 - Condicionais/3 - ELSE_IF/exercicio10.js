// EXERCÍCIO 10: Desconto por Quantidade
// 1-5: sem desconto,
//  6-10: 5%,
//  11-20: 10%,
// 21+: 15%

// Seu código aqui:

let quantidade = 12;
let precoUnitario = 50;
let valorFinal;

if (quantidade >= 1 && quantidade <= 5) {
  valorFinal = precoUnitario;
  console.log("Sem desconto");
} else if (quantidade >= 6 && quantidade <= 10) {
  valorFinal = precoUnitario * 0.95;
  console.log("Desconto de 5%");
} else if (quantidade >= 11 && quantidade <= 20) {
  valorFinal = precoUnitario * 0.9;
  console.log("Desconto de 10%");
} else if (quantidade >= 21) {
  valorFinal = precoUnitario * 0.85;
  console.log("Desconto de 15%");
} else {
  console.log("valor invalido");
}
