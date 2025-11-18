// EXERCÍCIO 7: Nível de Experiência
// 0-1 ano: Júnior,
//  2-5: Pleno,
//  6-10: Sênior,
// 11+: Especialista

// Seu código aqui:

let anosExperiencia = 4;

if (anosExperiencia >= 0 && anosExperiencia <= 1) {
  console.log("Júnior");
} else if (anosExperiencia >= 2 && anosExperiencia <= 5) {
  console.log("Pleno");
} else if (anosExperiencia >= 6 && anosExperiencia <= 10) {
  console.log("Sênior");
} else if (anosExperiencia >= 11) {
  console.log("Especialista");
} else {
  console.log("Anos de experiencia digitados invalidos");
}
