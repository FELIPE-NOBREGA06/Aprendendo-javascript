// EXERCÍCIO 2: IMC (Índice de Massa Corporal)
// Abaixo de 18.5: Abaixo do peso
// 18.5-24.9: Peso normal
// 25-29.9: Sobrepeso
// 30 ou mais: Obesidade

let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
// Seu código aqui:

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
