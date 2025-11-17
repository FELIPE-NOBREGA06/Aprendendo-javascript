# 🎯 Objetos - Estruturas Complexas

## 📖 Sobre

Objetos são coleções de propriedades (pares chave-valor) que representam entidades do mundo real.

## 📝 Sintaxe Básica

```javascript
// Criação
const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
  apresentar: function() {
    console.log(`Olá, sou ${this.nome}`);
  }
};

// Acesso
console.log(pessoa.nome);        // Notação de ponto
console.log(pessoa["idade"]);    // Notação de colchetes

// Modificação
pessoa.idade = 26;
pessoa.profissao = "Desenvolvedor";
```

## 📝 Exercícios (30)

| # | Arquivo | Contexto |
|---|---------|----------|
| 01 | [exercicio01.js](exercicio01.js) | Criação básica |
| 02 | [exercicio02.js](exercicio02.js) | Propriedades |
| 03 | [exercicio03.js](exercicio03.js) | Métodos |
| 04-30 | [...](.) | Sistemas completos |

## 🚀 Como Executar

```bash
node exercicio01.js
```

## 📚 Operações Comuns

### Adicionar/Modificar
```javascript
obj.novaProp = valor;
obj["outraProp"] = valor;
```

### Remover
```javascript
delete obj.propriedade;
```

### Verificar
```javascript
"propriedade" in obj        // Verifica se existe
obj.hasOwnProperty("prop")  // Verifica propriedade própria
```

### Iterar
```javascript
Object.keys(obj)      // Array de chaves
Object.values(obj)    // Array de valores
Object.entries(obj)   // Array de [chave, valor]

for (let chave in obj) {
  console.log(chave, obj[chave]);
}
```

## 💡 Casos de Uso

- Representar entidades (usuário, produto, pedido)
- Configurações
- Dados estruturados
- APIs e JSON

---

[⬅️ Voltar](../README.md)
