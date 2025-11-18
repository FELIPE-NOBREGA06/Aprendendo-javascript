// EXERCÍCIO 6: Velocidade do Vento
// 0-20: Brisa,
// 21-40: Vento moderado,
// 41-60: Vento forte,
// 61+: Tempestade

// Seu código aqui:

let velocidadeVento = 35;

if (velocidadeVento >= 0 && velocidadeVento <= 20) {
  console.log("Brisa");
} else if (velocidadeVento >= 21 && velocidadeVento <= 40) {
  console.log("vento moderado ");
} else if (velocidadeVento >= 41 && velocidadeVento <= 60) {
  console.log("Vento forte");
} else if (velocidadeVento >= 61) {
  console.log("Tempestade");
} else console.log("Numéro inválido!");
