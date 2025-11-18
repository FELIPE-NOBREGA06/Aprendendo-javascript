// EXERCÍCIO 15: Pontuação do Jogo
// 0-30: Bronze, 31-60: Prata, 61-90: Ouro, 91-100: Diamante

// Seu código aqui:

let pontos = 75;

if (pontos >= 0 && pontos <= 30) {
  console.log("Bronze");
} else if (pontos >= 31 && pontos <= 60) {
  console.log("Prata");
} else if (pontos >= 61 && pontos <= 90) {
  console.log("Ouro");
} else if (pontos >= 91 && pontos <= 100) {
  console.log("Diamante");
} else {
  console.log("Pontuação inválida");
}
