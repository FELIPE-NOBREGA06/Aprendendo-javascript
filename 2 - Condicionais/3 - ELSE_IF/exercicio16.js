// EXERCÍCIO 16: Velocidade da Internet
// <10: Lenta, 10-50: Média, 51-100: Rápida, >100: Muito rápida (Mbps)

// Seu código aqui:

let velocidade = 65;

if (velocidade < 10) {
  console.log("Lento");
} else if (velocidade <= 50) {
  console.log("Media");
} else if (velocidade <= 100) {
  console.log("Rápida");
} else if (velocidade > 100) {
  console.log("Muito rápido");
} else {
  console.log("número digitado é invalido");
}
