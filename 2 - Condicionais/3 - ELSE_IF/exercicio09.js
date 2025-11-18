// EXERCÍCIO 9: Qualidade do Ar
// 0-50: Boa,
// 51-100: Moderada,
//  101-150: Ruim,
//  151+: Péssima

// Seu código aqui:

let indiceAr = 75;

if (indiceAr >= 0 && indiceAr <= 50) {
  console.log("Boa");
} else if (indiceAr >= 51 && indiceAr <= 100) {
  console.log("Moderada");
} else if (indiceAr >= 101 && indiceAr <= 150) {
  console.log("Ruim");
} else if (indiceAr >= 151) {
  console.log("Péssima");
} else {
  console.log("valor invalido!");
}
