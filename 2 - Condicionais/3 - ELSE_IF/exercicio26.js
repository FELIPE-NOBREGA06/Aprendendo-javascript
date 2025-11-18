// EXERCÍCIO 26: Pontos de Fidelidade
// 0-100: Bronze, 101-500: Prata, 501-1000: Ouro, >1000: Platina

// Seu código aqui:

let pontos = 650;

if (pontos <= 100) {
  console.log("Bronze");
} else if (pontos >= 101 && pontos <= 500) {
  console.log("Prata");
} else if (pontos >= 501 && pontos <= 1000) {
  console.log("Ouro");
} else {
  console.log("Platina");
}
