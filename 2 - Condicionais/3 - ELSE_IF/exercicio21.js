// EXERCÍCIO 21: Índice UV
// 0-2: Baixo, 3-5: Moderado, 6-7: Alto, 8-10: Muito alto, 11+: Extremo
// Seu código aqui:

let indiceUV = 6;

if (indiceUV <= 2) {
  console.log("Baixo");
} else if (indiceUV <= 5) {
  console.log("Moderado");
} else if (indiceUV <= 7) {
  console.log("Alto");
} else if (indiceUV <= 10) {
  console.log("Muito Alto");
} else {
  console.log("Extremo");
}
