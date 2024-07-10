const perguntas = [
  {
    pergunta:
      "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    respostas: [
      "var minhaVariavel;",
      "declara minhaVariavel;",
      "defina minhaVariavel;",
    ],
    respostaCerta: 0,
  },
  {
    pergunta: "Qual é o operador para comparar valores e tipos em JavaScript?",
    respostas: ["==", "===", "="],
    respostaCerta: 1,
  },
  {
    pergunta:
      "Qual método converte uma string em um número inteiro em JavaScript?",
    respostas: ["parseInteger()", "convertToInt()", "parseInt()"],
    respostaCerta: 2,
  },
  {
    pergunta: "Como você chama uma função chamada 'minhaFuncao' em JavaScript?",
    respostas: [
      "chamar minhaFuncao()",
      "minhaFuncao();",
      "execute minhaFuncao()",
    ],
    respostaCerta: 1,
  },
  {
    pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
    respostas: ["'null'", "'object'", "'undefined'"],
    respostaCerta: 1,
  },
  {
    pergunta:
      "Qual método adiciona um novo elemento ao final de um array em JavaScript?",
    respostas: ["add()", "push()", "append()"],
    respostaCerta: 1,
  },
  {
    pergunta: "Qual é a saída de 'console.log(2 + '2')' em JavaScript?",
    respostas: ["'22'", "'4'", "error"],
    respostaCerta: 0,
  },
  {
    pergunta: "Qual declaração cria uma função em JavaScript?",
    respostas: [
      "function minhaFuncao() {}",
      "defina minhaFuncao() {}",
      "declare minhaFuncao() {}",
    ],
    respostaCerta: 0,
  },
  {
    pergunta:
      "Qual é a palavra-chave usada para definir uma constante em JavaScript?",
    respostas: ["constant", "const", "let"],
    respostaCerta: 1,
  },
  {
    pergunta:
      "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: ["remove()", "pop()", "delete()"],
    respostaCerta: 1,
  },
];

// Seleciona o elemento com o ID "quiz" no documento HTML
const quiz = document.querySelector("#quiz");

// Seleciona o elemento "template" no documento HTML
const template = document.querySelector("template");

// Comentado: Cria um clone do conteúdo do template e adiciona ao elemento quiz
// const quizItem = template.content.cloneNode(true);
// quiz.appendChild(quizItem);

// Loop de repetição para cada item na lista de perguntas
for (const item of perguntas) {
  // Cria um clone do conteúdo do template para cada item do quiz
  const quizItem = template.content.cloneNode(true);

  // Define o texto do cabeçalho (h3) com a pergunta atual
  quizItem.querySelector("h3").textContent = item.pergunta;

  // Loop de repetição para cada resposta na pergunta atual
  for (const resposta of item.respostas) {
    // Clona o elemento dt dentro do elemento dl
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    
    // Define o texto da resposta atual no span dentro do dt clonado
    dt.querySelector("span").textContent = resposta;
    
    // Adiciona o dt clonado (com a resposta) ao elemento dl
    quizItem.querySelector("dl").appendChild(dt);
  }

  // Remove o primeiro dt, que foi clonado e usado como modelo
  quizItem.querySelector("dl dt").remove();

  // Adiciona o item do quiz (com a pergunta e respostas) ao elemento quiz
  quiz.appendChild(quizItem);
}

