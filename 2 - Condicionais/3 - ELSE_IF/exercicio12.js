// EXERCÍCIO 12: Classificação de Filme
// Livre, 10+, 12+, 14+, 16+, 18+

let idadeEspectador = 15;
let classificacaoFilme = 14;

if (classificacaoFilme === 0) {
  console.log("Livre");
} else if (classificacaoFilme === 10) {
  if (idadeEspectador >= 10) {
    console.log("Liberado: 10+");
  } else {
    console.log("Não permitido: 10+");
  }
} else if (classificacaoFilme === 12) {
  if (idadeEspectador >= 12) {
    console.log("Liberado: 12+");
  } else {
    console.log("Não permitido: 12+");
  }
} else if (classificacaoFilme === 14) {
  if (idadeEspectador >= 14) {
    console.log("Liberado: 14+");
  } else {
    console.log("Não permitido: 14+");
  }
} else if (classificacaoFilme === 16) {
  if (idadeEspectador >= 16) {
    console.log("Liberado: 16+");
  } else {
    console.log("Não permitido: 16+");
  }
} else if (classificacaoFilme === 18) {
  if (idadeEspectador >= 18) {
    console.log("Liberado: 18+");
  } else {
    console.log("Não permitido: 18+");
  }
} else {
  console.log("Classificação inválida!");
}
