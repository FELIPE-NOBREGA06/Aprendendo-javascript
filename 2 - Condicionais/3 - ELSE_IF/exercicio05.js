// EXERCÍCIO 5: Preço do Ingresso
// 0-5 anos: grátis, 6-12: R$10, 13-59: R$25, 60+: R$15

// Seu código aqui:

let idade = 8;

if (idade >= 0 && idade <= 5) {
  console.log("Ingresso Grátis");
} else if (idade >= 6 && idade <= 12) {
  console.log("Ingresso R$ 10 Reais");
} else if (idade >= 13 && idade <= 59) {
  console.log("Ingresso R$ 25 Reais");
} else if (idade >= 60) {
  console.log("Ingresso R$ 15 Reais");
} else {
  console.log("Idade invalida!");
}
