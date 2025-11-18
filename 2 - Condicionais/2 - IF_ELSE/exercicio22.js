// EXERCÍCIO 22: Cupom de Desconto
// Se tiver cupom válido, aplique 20% de desconto
// Seu código aqui:

let temCupom = true;
let preco = 100;
let valorFinal;

if (temCupom) {
  valorFinal = preco * 0.8;
  console.log("Tem cupom");
} else {
  valorFinal = preco;
  console.log("Não tem cupom ");
}
