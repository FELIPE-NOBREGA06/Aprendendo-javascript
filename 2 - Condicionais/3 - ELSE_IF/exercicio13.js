// EXERCÍCIO 13: Faixa Salarial
// <2000: Baixo, 2000-5000: Médio, 5001-10000: Alto, >10000: Muito alto

// Seu código aqui:

let salario = 4500;

if (salario < 2000) {
  console.log("Abaixo");
} else if (salario >= 2000 && salario <= 5000) {
  console.log("Médio");
} else if (salario > 5000 && salario <= 10000) {
  console.log("alto");
} else if (salario > 10000) {
  console.log("Muito alto");
} else {
  console.log(" Valor invalido");
}
