// EXERCÍCIO 3: Desconto
// Se o valor da compra for maior que 100, aplique 10% de desconto
// Senão, não aplique desconto. Mostre o valor final

// Seu código aqui:

let valorCompra = 150;

if (valorCompra > 100) {
  valorFinal = valorCompra * 0.9;
  console.log("Desconto aplicado! Valor final: R$ ", valorFinal);
} else {
  valorFinal = valorCompra;
  console.log("Sem desconto. o valor final: R$ ", valorFinal);
}
