const perguntas = [
  {
    pergunta:
      "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    respostas: [
      "var minhaVariavel;",
      "declara minhaVariavel;",
      "defina minhaVariavel;",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o operador para comparar valores e tipos em JavaScript?",
    respostas: ["==", "===", "="],
    correta: 1,
  },
  {
    pergunta:
      "Qual método converte uma string em um número inteiro em JavaScript?",
    respostas: ["parseInteger()", "convertToInt()", "parseInt()"],
    correta: 2,
  },
  {
    pergunta: "Como você chama uma função chamada 'minhaFuncao' em JavaScript?",
    respostas: [
      "chamar minhaFuncao()",
      "minhaFuncao();",
      "execute minhaFuncao()",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
    respostas: ["'null'", "'object'", "'undefined'"],
    correta: 1,
  },
  {
    pergunta:
      "Qual método adiciona um novo elemento ao final de um array em JavaScript?",
    respostas: ["add()", "push()", "append()"],
    correta: 1,
  },
  {
    pergunta: "Qual é a saída de 'console.log(2 + '2')' em JavaScript?",
    respostas: ["'22'", "'4'", "error"],
    correta: 0,
  },
  {
    pergunta: "Qual declaração cria uma função em JavaScript?",
    respostas: [
      "function minhaFuncao() {}",
      "defina minhaFuncao() {}",
      "declare minhaFuncao() {}",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a palavra-chave usada para definir uma constante em JavaScript?",
    respostas: ["constant", "const", "let"],
    correta: 1,
  },
  {
    pergunta:
      "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: ["remove()", "pop()", "delete()"],
    correta: 1,
  },
];

// Seleciona o elemento com o ID "quiz" no documento HTML
const quiz = document.querySelector("#quiz");

// Seleciona o elemento "template" no documento HTML
const template = document.querySelector("template");

const totolDePerguntas = perguntas.length;
const corretas = new Set();
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totolDePerguntas;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);

  quizItem.querySelector("h3").textContent = item.pergunta;

  for (const resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);

    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + " de " + totolDePerguntas;
    };

    // Adiciona o dt clonado (com a resposta) ao elemento dl
    quizItem.querySelector("dl").appendChild(dt);
  }

  // Remove o primeiro dt, que foi clonado e usado como modelo
  quizItem.querySelector("dl dt").remove();

  // Adiciona o item do quiz (com a pergunta e respostas) ao elemento quiz
  quiz.appendChild(quizItem);
}
