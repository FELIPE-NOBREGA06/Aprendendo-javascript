let n1 = [10, 20, 30];
let n2 = [11, 21, 34, 54, 44];
let n3 = [...n1, ...n2];

const jogador1 = { nome: "felipe", energia: 100, vida: 3, magia: 150 };
const jogador2 = { nome: "cleverson", energia: 110, vida: 3, velocidada: 80 };
const jogador3 = { ...jogador1, ...jogador2 };

console.log(jogador3);
console.log("n3: " + typeof n3);
