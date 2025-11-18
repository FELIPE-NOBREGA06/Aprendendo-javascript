// EXERCÍCIO 17: Pressão Arterial
// <90: Baixa, 90-120: Normal, 121-140: Elevada, >140: Alta

// Seu código aqui:

let pressao = 115;

if (pressao < 90) {
  console.log("Baixa");
} else if (pressao >= 90 && pressao <= 120) {
  console.log("Normal");
} else if (pressao >= 121 && pressao <= 140) {
  console.log("Elevada");
} else if (pressao > 140) {
  console.log("Alta");
}
