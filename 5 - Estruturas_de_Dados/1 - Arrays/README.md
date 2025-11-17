# 🎯 Arrays - Listas em JavaScript

## 📖 Sobre

Arrays são estruturas que armazenam múltiplos valores em uma única variável, acessados por índices numéricos.

## 📝 Sintaxe Básica

```javascript
// Criação
const numeros = [1, 2, 3, 4, 5];
const frutas = ["maçã", "banana", "laranja"];

// Acesso
console.log(frutas[0]); // "maçã"

// Modificação
frutas[1] = "morango";
```

## 📝 Exercícios (30)

| # | Arquivo | Contexto |
|---|---------|----------|
| 01 | [exercicio01.js](exercicio01.js) | Criação e acesso |
| 02 | [exercicio02.js](exercicio02.js) | Adicionar elementos |
| 03 | [exercicio03.js](exercicio03.js) | Remover elementos |
| 04 | [exercicio04.js](exercicio04.js) | Percorrer array |
| 05 | [exercicio05.js](exercicio05.js) | Buscar elementos |
| 06-30 | [...](.) | Exercícios diversos |

## 🚀 Como Executar

```bash
node exercicio01.js
```

## 📚 Métodos Importantes

### Adicionar/Remover
```javascript
arr.push(item)      // Adiciona no final
arr.pop()           // Remove do final
arr.unshift(item)   // Adiciona no início
arr.shift()         // Remove do início
```

### Busca
```javascript
arr.indexOf(item)   // Índice do elemento
arr.includes(item)  // Verifica se existe
arr.find(callback)  // Encontra elemento
```

### Transformação
```javascript
arr.map(callback)     // Transforma cada elemento
arr.filter(callback)  // Filtra elementos
arr.reduce(callback)  // Reduz a um valor
```

### Outros
```javascript
arr.length          // Tamanho do array
arr.sort()          // Ordena
arr.reverse()       // Inverte
arr.join(sep)       // Converte para string
```

---

[⬅️ Voltar](../README.md)
