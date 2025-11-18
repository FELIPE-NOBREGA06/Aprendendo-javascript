// EXERCÍCIO 19: Distância de Entrega
// 0-5km: R$5, 6-10km: R$10, 11-20km: R$15, >20km: R$25
// Seu código aqui:

let distancia = 8;

if (distancia <= 5) {
  console.log("R$ 5 Reais");
} else if (distancia <= 10) {
  console.log("R$ 10 Reais");
} else if (distancia <= 20) {
  console.log("R$ 15 Reais");
} else {
  console.log("R$ 25 Reais");
}
