// ===== AULA 06: OPERADOR DE IGUALDADE =====

// DECLARANDO VARIÁVEIS
let n1 = 10;
let n2 = 10;

// OPERADOR DE IGUALDADE (==)
// Compara se dois valores são iguais
// Retorna true se forem iguais, false se diferentes
console.log(n1 == n2); // true (10 é igual a 10)

// DIFERENÇA ENTRE == E ===
// == compara apenas o VALOR (faz conversão de tipo)
// === compara VALOR e TIPO (mais rigoroso)
// Exemplos:
// 10 == "10"  → true (converte string para número)
// 10 === "10" → false (tipos diferentes: number vs string)
