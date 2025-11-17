// ===== AULA 07: OPERADORES LÓGICOS =====

// OPERADORES LÓGICOS
// Combinam múltiplas condições
//  && -> AND (E) - todas as condições devem ser verdadeiras
//  || -> OR (OU) - pelo menos uma condição deve ser verdadeira
//  ! -> NOT (NÃO) - inverte o valor booleano

// DECLARANDO VARIÁVEIS
let n1, n2, n3, n4;

n1 = 10;
n2 = 20;
n3 = 30;
n4 = 15;

// OPERADOR OR (||)
// Retorna true se PELO MENOS UMA condição for verdadeira
// n1 > n2 → false (10 não é maior que 20)
// n1 > n3 → false (10 não é maior que 30)
// false || false → false
console.log(n1 > n2 || n1 > n3); // false

// EXEMPLOS:
// true || false → true
// false || true → true
// true || true → true
// false || false → false

// OPERADOR AND (&&)
// Retorna true se TODAS as condições forem verdadeiras
// console.log(n1 < n2 && n1 < n3); // true (10 < 20 E 10 < 30)

// OPERADOR NOT (!)
// Inverte o valor booleano
// console.log(!(n1 > n2)); // true (inverte false)
