// ===== AULA 03: LET vs CONST =====

"use strict";

// LET - VARIÁVEL MUTÁVEL
// let permite reatribuir valores
// O valor pode mudar durante a execução do programa
let nome = "Felipe";
nome = "Cleverson"; // Podemos mudar o valor
nome = 10;          // Podemos até mudar o tipo

// CONST - CONSTANTE
// const NÃO permite reatribuir valores
// Use para valores que não devem mudar
// NOTA: Este código tem um erro proposital para demonstração
// const nome1 = felipe; // ERRO: felipe não está definido
// Correto seria: const nome1 = "felipe";

// EXIBINDO O VALOR FINAL
console.log(nome); // Exibe: 10 (último valor atribuído)
