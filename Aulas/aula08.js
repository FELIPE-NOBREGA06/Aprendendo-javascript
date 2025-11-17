// ===== AULA 08: ESTRUTURAS DE CONTROLE =====

// ESTRUTURA IF
// Executa um bloco de código se a condição for verdadeira
let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
}

// ESTRUTURA IF/ELSE
// Executa um bloco se verdadeiro, outro se falso
let nota = 7;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// ESTRUTURA ELSE IF
// Testa múltiplas condições em sequência
let temperatura = 25;

if (temperatura < 15) {
    console.log("Frio");
} else if (temperatura < 25) {
    console.log("Agradável");
} else {
    console.log("Quente");
}

// ESTRUTURA SWITCH
// Compara um valor com vários casos
let dia = 1;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    default:
        console.log("Outro dia");
}
