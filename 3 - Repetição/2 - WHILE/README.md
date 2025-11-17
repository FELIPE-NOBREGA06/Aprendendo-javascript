# 🔄 WHILE - Loop com Condição

## 📖 Sobre

O loop `while` continua executando enquanto a condição for verdadeira. Ideal quando você não sabe quantas iterações serão necessárias.

## 📝 Sintaxe

```javascript
while (condicao) {
  // código a ser repetido
  // não esqueça de modificar a condição!
}
```

## 📝 Exercícios (30)

| # | Arquivo | Contexto |
|---|---------|----------|
| 01 | [exercicio01.js](exercicio01.js) | Contador básico |
| 02 | [exercicio02.js](exercicio02.js) | Validação de entrada |
| 03 | [exercicio03.js](exercicio03.js) | Acumulador |
| 04-30 | [...](.) | Exercícios diversos |

## 🚀 Como Executar

```bash
node exercicio01.js
```

## 💡 Casos de Uso

- Validações de entrada
- Processos que dependem de condições
- Leitura de dados até um critério
- Jogos e simulações

## ⚠️ Cuidado

```javascript
// ❌ Loop infinito - EVITE!
while (true) {
  // sem condição de saída
}

// ✅ Sempre tenha uma condição de saída
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++; // modifica a condição
}
```

---

[⬅️ Voltar](../README.md)
