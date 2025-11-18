// EXERCÍCIO 28: Desconto Progressivo
// Se compra > 500, desconto de 15%, senão 5%

// Seu código aqui:

let valorCompra = 600;
let desconto;

if (valorCompra > 500) {
  desconto = valorCompra * 0.15;
  console.log("Desconto de 15%");
} else {
  desconto = valorCompra * 0.05;
  console.log("desconto de 5% ");
}
