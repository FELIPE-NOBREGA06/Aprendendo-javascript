// EXERCÍCIO 11: Nível de Bateria
// 0-20: Crítico, 21-50: Baixo, 51-80: Médio, 81-100: Alto

// Seu código aqui:

let bateria = 45;

if (bateria >= 0 && bateria <= 20) {
  console.log("Critico");
} else if (bateria >= 21 && bateria <= 50) {
  console.log("baixa");
} else if (bateria >= 51 && bateria <= 80) {
  console.log("Media");
} else if (bateria >= 81 && bateria <= 100) {
  console.log("Alto");
}
