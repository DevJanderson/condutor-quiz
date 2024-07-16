const perguntas = [
  {
    pergunta: "A via que se caracteriza por interseções em nível não semaforizadas, destinada apenas ao acesso local ou a áreas restritas, é classificada como:",
    respostas: [
      "Via local",
      "Via de trânsito rápido",
      "Via rural",
      "Via coletora"
    ],
    correta: 0,
    imagem: ""
  },
  {
    pergunta: "Qual é a velocidade máxima permitida em vias urbanas, salvo sinalização contrária?",
    respostas: [
      "30 km/h",
      "40 km/h",
      "50 km/h",
      "60 km/h"
    ],
    correta: 2
  },

  {
    pergunta: "O efeito da bebida alcoólica no organismo humano:",
    respostas: [
      "Cria um senso de equilíbrio.",
      "Não altera o comportamento do condutor, já que o seu senso de equilíbrio encontra-se em nível de normalidade.",
      "Afeta negativamente o estado físico e mental no modo de dirigir.",
      "Aumenta a capacidade de dirigir, pois os condutores acham que seus reflexos ficam acelerados."
    ],
    correta: 2
  },
  {
    pergunta: "A obrigatoriedade do uso do cinto de segurança para condutores e passageiros é porque evita:",
    respostas: [
      "O cometimento de infrações que geram multas gravíssimas.",
      "O lançamento dos corpos para fora do veículo no caso de colisões.",
      "Colisão com veículos da frente.",
      "Colisão com veículos de trás."
    ],
    correta: 1
  },
  {
    pergunta: "Se ocorrer um acidente, o condutor ao solicitar o serviço de resgate para atender às vítimas, deve adotar o seguinte procedimento:",
    respostas: [
      "Informar a gravidade do acidente, a localização, o estado das vítimas e o tipo de acidente",
      "Isolar a área e fazer mutirão com os demais condutores para atender às vítimas",
      "Informar a localização do acidente e adiantar o atendimento, liberando as vias aéreas da vítima",
      "Informar o tipo de acidente e retirar imediatamente a vítima do local do acidente"
    ],
    correta: 0
  },
  {
    pergunta: "O cinto de segurança pode ser usado por:",
    respostas: [
      "Mais de uma pessoa.",
      "Mãe e filhos juntos ao mesmo cinto.",
      "Somente uma pessoa.",
      "Motorista e passageiro junto ao mesmo cinto."
    ],
    correta: 2
  },
  {
    pergunta: "Conduzir o veículo, após a ingestão de bebida alcoólica, resulta em:",
    respostas: [
      "Todas as alternativas estão corretas.",
      "Aumento da capacidade de ação e reação.",
      "Limitação da percepção de situação de perigo.",
      "Melhora a coordenação motora e deixa o condutor hábil"
    ],
    correta: 2
  },
  {
    pergunta: "As vias rurais classificam-se em:",
    respostas: [
      "Rodovias pavimentadas e rodovias vicinais.",
      "Rodovias, estradas e estradas vicinais.",
      "Rodovias e estradas.",
      "Rodovias, vicinais e vias de trânsito rápido."
    ],
    correta: 1
  },
  {
    pergunta: "O Código de Trânsito Brasileiro (CTB) estabelece regras e normas válidas em todo o território nacional para:",
    respostas: [
      "Ruas, avenidas, logradouros, rodovias e estradas",
      "Ruas, avenidas, logradouros, caminhos, passagens, rodovias, estradas, praias abertas à circulação e vias internas de condomínios",
      "Ruas, avenidas, rodovias e estradas",
      "Ruas, avenidas, logradouros, caminhos, passagens, rodovias e estradas"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a velocidade máxima permitida em rodovias para automóveis, caminhonetas e motocicletas, salvo sinalização em contrário?",
    respostas: [
      "110 km/h",
      "120 km/h",
      "90 km/h",
      "80 km/h"
    ],
    correta: 0
  },
  {
    pergunta: "O que o condutor deve fazer ao perceber que outro veículo deseja ultrapassá-lo?",
    respostas: [
      "Acelerar o veículo para evitar a ultrapassagem.",
      "Reduzir a velocidade e facilitar a ultrapassagem.",
      "Manter a velocidade e a posição na via.",
      "Desviar para o acostamento."
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do sistema de freios do veículo?",
    respostas: [
      "Proporcionar tração nas rodas.",
      "Reduzir a velocidade ou parar o veículo.",
      "Amortecer os impactos das irregularidades do solo.",
      "Aumentar a velocidade do veículo."
    ],
    correta: 1
  },
  {
    pergunta: "A sinalização de regulamentação tem por finalidade:",
    respostas: [
      "Advertir os usuários da via sobre condições potencialmente perigosas.",
      "Indicar aos usuários da via as normas que devem ser obedecidas.",
      "Indicar os nomes das ruas e as direções a serem seguidas.",
      "Orientar os condutores sobre a existência de escolas e hospitais."
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal função do sistema de suspensão de um veículo?",
    respostas: [
      "Aumentar a estabilidade e o conforto ao absorver impactos.",
      "Proporcionar tração nas rodas.",
      "Reduzir a velocidade ou parar o veículo.",
      "Aumentar a velocidade do veículo."
    ],
    correta: 0
  },
  {
    pergunta: "Em caso de acidente com vítima, o que o condutor deve fazer primeiro?",
    respostas: [
      "Remover o veículo da via imediatamente.",
      "Sinalizar o local e aguardar o resgate.",
      "Remover a vítima do local do acidente.",
      "Prosseguir viagem após o acidente."
    ],
    correta: 1
  },
  {
    pergunta: "Para virar à direita em uma via de mão dupla, o condutor deve:",
    respostas: [
      "Sinalizar e posicionar-se o mais à direita possível.",
      "Sinalizar e posicionar-se o mais à esquerda possível.",
      "Sinalizar e posicionar-se no centro da via.",
      "Não é necessário sinalizar."
    ],
    correta: 0
  },
  {
    pergunta: "O uso de dispositivos de segurança para crianças (cadeirinhas) é obrigatório para crianças de até:",
    respostas: [
      "3 anos.",
      "5 anos.",
      "7 anos e meio.",
      "10 anos."
    ],
    correta: 2
  },
  {
    pergunta: "Ao avistar um semáforo com luz amarela intermitente, o condutor deve:",
    respostas: [
      "Acelerar para atravessar o cruzamento rapidamente.",
      "Parar o veículo imediatamente.",
      "Reduzir a velocidade e seguir com atenção.",
      "Desviar para outra via."
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a atitude correta ao se aproximar de um cruzamento não sinalizado?",
    respostas: [
      "Acelerar e atravessar rapidamente.",
      "Parar o veículo e aguardar o sinal verde.",
      "Reduzir a velocidade e dar preferência ao veículo da direita.",
      "Desviar para evitar o cruzamento."
    ],
    correta: 2
  },
  // placas:
  {
    "pergunta": "A Placa de Sinalização ao lado indica que é proibido:",
    "respostas": [
      "Estacionar",
      "Ultrapassar",
      "Parar e estacionar",
      "Transitar"
    ],
    "correta": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/861159/placa_de_transito_regulamentacao_r_6a_proibido_estacionar_2791714_1_5c2946df0c73495153e63285630f7397.jpg" // Proibido Estacionar
  },
];



// Seleciona o elemento com o ID "quiz" no documento HTML
const quiz = document.querySelector("#quiz");

// Seleciona o elemento "template" no documento HTML
const template = document.querySelector("template");

const totalDePerguntas = perguntas.length;
const corretas = new Set();
const mostrarTotal = document.querySelector("#acertos span");
const mostrarPercentual = document.querySelector("#percent"); // Seleciona o elemento para mostrar o percentual

// Função para calcular o percentual de acerto
function calcularPercentual(acertos, total) {
    return (acertos / total) * 100;
}

// Atualiza o elemento HTML com o percentual de acerto
function atualizarPercentual() {
    const percentual = calcularPercentual(corretas.size, totalDePerguntas);
    mostrarPercentual.textContent = `${percentual.toFixed(1)}%`; // Atualiza o conteúdo do elemento de percentual
}

// Inicializa a exibição do total de acertos
mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;

perguntas.forEach(item => {
    const quizItem = template.content.cloneNode(true);

    quizItem.querySelector("h3").textContent = item.pergunta;

    // Adiciona a imagem, se disponível
    if (item.imagem) {
        const img = quizItem.querySelector(".placa-img");
        img.src = item.imagem;
        img.alt = "Imagem da placa de trânsito";
    } else {
        quizItem.querySelector(".placa-img").remove();
    }

    item.respostas.forEach(resposta => {
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        const input = dt.querySelector("input");
        const span = dt.querySelector("span");

        span.textContent = resposta;
        input.setAttribute("name", "pergunta-" + perguntas.indexOf(item));
        input.value = item.respostas.indexOf(resposta);

        input.onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            // Remover classes de todos os inputs e spans relacionados
            const inputs = quizItem.querySelectorAll("input");
            const spans = quizItem.querySelectorAll("span");
            inputs.forEach(inp => inp.classList.remove("wrong", "correct"));
            spans.forEach(sp => sp.classList.remove("wrong", "correct"));

            if (estaCorreta) {
                input.classList.add("correct");
                span.classList.add("correct");
            } else {
                input.classList.add("wrong");
                span.classList.add("wrong");
            }

            corretas.delete(item);
            if (estaCorreta) {
                corretas.add(item);
            }

            mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
            atualizarPercentual(); // Atualiza o percentual de acerto após cada resposta
        };

        quizItem.querySelector("dl").appendChild(dt);
    });

    quizItem.querySelector("dl dt").remove();

    quiz.appendChild(quizItem);
});
