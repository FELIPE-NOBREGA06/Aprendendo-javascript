// EXERCÍCIO 27: Capacidade de Armazenamento
// <16GB: Baixo, 16-64: Médio, 65-256: Alto, >256: Muito alto

// Seu código aqui:

let armazenamento = 128;

if (armazenamento < 16) {
  console.log("Baixo");
} else if (armazenamento >= 16 && armazenamento <= 64) {
  console.log("Médio");
} else if (armazenamento >= 65 && armazenamento <= 256) {
  console.log("Alto");
} else {
  console.log("Muito alto");
}
