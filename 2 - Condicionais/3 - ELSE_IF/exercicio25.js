// EXERCÍCIO 25: Umidade do Ar
// <30%: Muito seco, 30-50: Seco, 51-70: Ideal, >70: Úmido

// Seu código aqui:

let umidade = 55;

if (umidade < 30) {
  console.log("Muito seco");
} else if (umidade >= 30 && umidade <= 50) {
  console.log("Seco");
} else if (umidade >= 51 && umidade <= 70) {
  console.log("Ideal");
} else {
  console.log("Úmido");
}
