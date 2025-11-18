// EXERCÍCIO 7: Dia Útil ou Final de Semana
// Se o dia for 1-5: "Dia útil", se for 6-7: "Final de semana"

// Seu código aqui:

let diaSemana = 6;

if (diaSemana >= 1 && diaSemana <= 5) {
  console.log("Dia útil");
} else if (diaSemana === 6 || diaSemana === 7) {
  console.log("Final de semana");
} else {
  console.log("Dia invalido");
}
