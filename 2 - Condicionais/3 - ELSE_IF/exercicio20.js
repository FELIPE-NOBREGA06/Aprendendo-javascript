// EXERCÍCIO 20: Tempo de Resposta
// <1s: Excelente, 1-3s: Bom, 3-5s: Aceitável, >5s: Lento

// Seu código aqui:

let tempoResposta = 2.5;

if (tempoResposta < 1) {
  console.log("Excelente");
} else if (tempoResposta <= 3) {
  console.log("Bom");
} else if (tempoResposta <= 5) {
  console.log("Aceitável");
} else {
  console.log("Lento");
}
