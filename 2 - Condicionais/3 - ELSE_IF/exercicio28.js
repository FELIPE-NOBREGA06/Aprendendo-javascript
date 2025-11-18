// EXERCÍCIO 28: Frequência Cardíaca
// <60: Baixa, 60-100: Normal, 101-120: Elevada, >120: Muito alta
// Seu código aqui:

let frequencia = 85;

if (frequencia < 60) {
  console.log("Baixa");
} else if (frequencia <= 100) {
  console.log("Normal");
} else if (frequencia <= 120) {
  console.log("Elevada");
} else {
  console.log("Muito alta");
}
