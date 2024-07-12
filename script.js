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
  },
  {
    pergunta: "Segundo o Artigo 188 do CTB: Transitar ao lado de outro veículo, interrompendo ou perturbando o trânsito, é infração:",
    respostas: [
      "Leve",
      "Média",
      "Grave",
      "Gravíssima"
    ],
    correta: 2,
  },
  {
    pergunta: "A Placa de Sinalização de Obras ao lado indica:",
    respostas: [
      "Altura máxima para motocicletas",
      "Altura máxima para automóveis",
      "Altura limitada",
      "Altura mínima permitida"
    ],
    correta: 2,
  },
  {
    pergunta: "O efeito da bebida alcoólica no organismo humano:",
    respostas: [
      "Cria um senso de equilíbrio.",
      "Não altera o comportamento do condutor, já que o seu senso de equilíbrio encontra-se em nível de normalidade.",
      "Afeta negativamente o estado físico e mental no modo de dirigir.",
      "Aumenta a capacidade de dirigir, pois os condutores acham que seus reflexos ficam acelerados."
    ],
    correta: 2,
  },
  {
    pergunta: "A obrigatoriedade do uso do cinto de segurança para condutores e passageiros é porque evita:",
    respostas: [
      "O cometimento de infrações que geram multas gravíssimas.",
      "O lançamento dos corpos para fora do veículo no caso de colisões.",
      "Colisão com veículos da frente.",
      "Colisão com veículos de trás."
    ],
    correta: 1,
  },
  {
    pergunta: "Se ocorrer um acidente, o condutor ao solicitar o serviço de resgate para atender às vítimas, deve adotar o seguinte procedimento:",
    respostas: [
      "Informar a gravidade do acidente, a localização, o estado das vítimas e o tipo de acidente",
      "Isolar a área e fazer mutirão com os demais condutores para atender às vítimas",
      "Informar a localização do acidente e adiantar o atendimento, liberando as vias aéreas da vítima",
      "Informar o tipo de acidente e retirar imediatamente a vítima do local do acidente"
    ],
    correta: 0,
  },
  {
    pergunta: "O cinto de segurança pode ser usado por:",
    respostas: [
      "Mais de uma pessoa.",
      "Mãe e filhos juntos ao mesmo cinto.",
      "Somente uma pessoa.",
      "Motorista e passageiro junto ao mesmo cinto."
    ],
    correta: 2,
  },
  {
    pergunta: "Conduzir o veículo, após a ingestão de bebida alcoólica, resulta em:",
    respostas: [
      "Todas as alternativas estão corretas.",
      "Aumento da capacidade de ação e reação.",
      "Limitação da percepção de situação de perigo.",
      "Melhora a coordenação motora e deixa o condutor hábil"
    ],
    correta: 2,
  },
  {
    pergunta: "As vias rurais classificam-se em:",
    respostas: [
      "Rodovias pavimentadas e rodovias vicinais.",
      "Rodovias, estradas e estradas vicinais.",
      "Rodovias e estradas.",
      "Rodovias, vicinais e vias de trânsito rápido."
    ],
    correta: 1,
  },
  {
    pergunta: "O Código de Trânsito Brasileiro (CTB) estabelece regras e normas válidas em todo o território nacional para:",
    respostas: [
      "Ruas, avenidas, logradouros, rodovias e estradas",
      "Ruas, avenidas, logradouros, caminhos, passagens, rodovias, estradas, praias abertas à circulação e vias internas de condomínios",
      "Ruas, avenidas, rodovias e estradas",
      "Ruas, avenidas, logradouros, caminhos, passagens, rodovias e estradas"
    ],
    correta: 1,
  },
  {
    pergunta: "Transitar pela contramão de direção em vias com sinalização de regulamentação de sentido único de circulação é uma infração (CTB Art. 186, inciso II):",
    respostas: [
      "Leve",
      "Média",
      "Gravíssima",
      "Grave"
    ],
    correta: 2,
  },
  {
    pergunta: "Os componentes essenciais do sistema de controle do aquecimento do motor, com sistema de arrefecimento à água, são:",
    respostas: [
      "Radiador, bomba-d'água e válvula termostática",
      "Bomba-d'água, câmaras de resfriamento e bulbo indicador",
      "Válvula termostática, reservatório e alternador",
      "Termômetro, radiador, água com solução e embreagem"
    ],
    correta: 0,
  },
  {
    pergunta: "As regras fundamentais de primeiros socorros são:",
    respostas: [
      "Tranquilizar o acidentado; estimular a circulação do local fraturado por meio de massagem local; e atuar com rapidez",
      "Afastar os curiosos; telefonar para o serviço de resgate; e movimentar a vítima",
      "Aquecer o acidentado por meio da oferta de bebida quente; avaliar a situação; e conversar de forma calma com o acidentado",
      "Sinalizar o local do acidente; acionar o serviço de emergência; e avaliar os riscos para o acidentado"
    ],
    correta: 3,
  },
  {
    pergunta: "Em um acidente de trânsito você deve:",
    respostas: [
      "Passar direto, reduzindo bem a velocidade.",
      "Não ligar para o atendimento médico especializado, antes de tomar as primeiras providências.",
      "Parar somente se já houver pessoas prestando socorro.",
      "Parar em local seguro sinalizando esse acidente."
    ],
    correta: 3,
  },
  {
    pergunta: "Qual é a primeira providência a ser tomada pelo condutor em caso de acidente de trânsito com vítimas?",
    respostas: [
      "Remover imediatamente os veículos da via para evitar congestionamento.",
      "Prestar socorro às vítimas, acionando o serviço de emergência e sinalizando o local.",
      "Registrar o acidente com fotos antes de prestar qualquer socorro.",
      "Realizar um levantamento detalhado da causa do acidente antes de prestar socorro."
    ],
    correta: 1,
  },
  
  {
    pergunta: "Os riscos e os perigos a que estão sujeitos os usuários no trânsito estão relacionados com: os veículos; os condutores; as vias; o ambiente; e...",
    respostas: [
      "O comportamento das pessoas.",
      "Ao sistema de iluminação pública.",
      "As ações governamentais.",
      "A fiscalização dos agentes de trânsito."
    ],
    correta: 0,
  },
  {
    pergunta: "Qual categoria de habilitação que habilita o condutor a dirigir veículo com combinação, cuja unidade tratora se enquadra nas categorias B, C ou D e cuja unidade acoplada, reboque, semi-reboque ou articulado, tenha 6.000 quilogramas ou mais de peso bruto total?",
    respostas: [
      "Categoria E",
      "Categoria D",
      "Categoria C",
      "Categoria A"
    ],
    correta: 0,
  },
  {
    pergunta: "Ofuscamento e chuva são respectivamente condições adversas de:",
    respostas: [
      "Trânsito e estrada.",
      "Luz e trânsito.",
      "Luz e tempo.",
      "Tempo e trânsito."
    ],
    correta: 2,
  },
  {
    pergunta: "Ao trafegar em trecho de rodovia com neblina intensa o condutor deve:",
    respostas: [
      "Seguir bem de perto um veículo de grande porte, como um caminhão, para usar suas luzes traseiras como referência.",
      "Acender o farol alto, para tornar o veículo mais visível e melhorar a visibilidade da pista à frente.",
      "Reduzir a velocidade e manter uma distância segura do veículo à frente.",
      "Aumentar a velocidade para atravessar a neblina rapidamente."
    ],
    correta: 2,
  },
  {
    pergunta: "Transitar em velocidade superior à máxima permitida para o local, medida por instrumento ou equipamento hábil, em até 20%, é uma infração:",
    respostas: [
      "Leve",
      "Média",
      "Grave",
      "Gravíssima"
    ],
    correta: 1,
  }
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

    item.respostas.forEach(resposta => {
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        const input = dt.querySelector("input");
        const span = dt.querySelector("span");

        span.textContent = resposta;
        input.setAttribute("name", "pergunta-" + perguntas.indexOf(item));
        input.value = item.respostas.indexOf(resposta);

        input.onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            if (!estaCorreta) {
                input.classList.add("wrong");
                span.classList.add("wrong");
            } else {
                input.classList.remove("wrong");
                span.classList.remove("wrong");
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

