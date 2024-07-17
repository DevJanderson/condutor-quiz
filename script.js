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
  {
    "pergunta": "A Placa de Sinalização ao lado indica:",
    "respostas": [
      "Velocidade mínima",
      "Limite de velocidade",
      "Velocidade máxima permitida",
      "Velocidade aconselhada"
    ],
    "correta": 2,
    "imagem": "https://http2.mlstatic.com/D_NQ_NP_683320-MLB68892140288_042023-O.webp" // Velocidade Máxima Permitida
  },
  {
    "pergunta": "A Placa de Sinalização ao lado indica:",
    "respostas": [
      "Via preferencial",
      "Via com mão dupla",
      "Proibido ultrapassar",
      "Pista sinuosa"
    ],
    "correta": 1,
    "imagem": "https://www.seton.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c0255.jpg" // Mão Dupla
  },
  {
    "pergunta": "A Placa de Sinalização ao lado indica:",
    "respostas": [
      "Curva perigosa à direita",
      "Interseção oblíqua",
      "Rotatória",
      "Cruzamento"
    ],
    "correta": 0,
    "imagem": "https://meiocorte.pt/wp-content/uploads/2018/12/A1A-300x300.png" // Curva Perigosa à Direita
  },
  {
    "pergunta": "A Placa de Sinalização ao lado indica:",
    "respostas": [
      "Travessia de pedestres",
      "Passagem de escolares",
      "Área de estacionamento",
      "Área de cruzamento"
    ],
    "correta": 0,
    "imagem": "https://w7.pngwing.com/pngs/285/730/png-transparent-pedestrian-crossing-traffic-sign-road-road-blue-angle-text.png" // Travessia de Pedestres
  },
  {
    "pergunta": "A Placa de Sinalização ao lado indica:",
    "respostas": [
      "Rodovia",
      "Avenida",
      "Estrada de ferro",
      "Passagem de nível sem barreira"
    ],
    "correta": 3,
    "imagem": "https://isinaliza.vtexassets.com/arquivos/ids/238867-800-auto?v=637709598093100000&width=800&height=auto&aspect=true" // Passagem de nível sem barreira
  },
  {
    "pergunta": "A Placa de Sinalização ao lado indica:",
    "respostas": [
      "Interseção com via lateral",
      "Desvio à direita",
      "Desvio à esquerda",
      "Interseção em T"
    ],
    "correta": 3,
    "imagem": "https://blog.usezapay.com.br/wp-content/uploads/2023/02/placa-a8.jpg" // Interseção em T
  },
  // Multas
  {
    "pergunta": "Qual é a classificação de uma infração por conduzir o veículo com a carga excedente ao permitido?",
    "respostas": [
      "Leve",
      "Média",
      "Grave",
      "Gravíssima"
    ],
    "correta": 2,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Qual é a penalidade para uma infração considerada 'Gravíssima' segundo o Código de Trânsito Brasileiro (CTB)?",
    "respostas": [
      "Multa e suspensão do direito de dirigir",
      "Multa e apreensão do veículo",
      "Multa e advertência",
      "Multa e cursos de reciclagem"
    ],
    "correta": 0,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Qual é a infração classificada como 'Grave' que pode ser cometida ao ultrapassar em local proibido?",
    "respostas": [
      "Ultrapassagem em faixa contínua",
      "Ultrapassagem em local sinalizado",
      "Ultrapassagem pela direita",
      "Ultrapassagem em faixa de pedestres"
    ],
    "correta": 0,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "De acordo com o CTB, qual é a penalidade para dirigir sem habilitação?",
    "respostas": [
      "Multa e retenção do veículo",
      "Multa e pontos na CNH",
      "Multa e advertência",
      "Multa e suspensão temporária"
    ],
    "correta": 0,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Qual infração é considerada 'Leve' segundo a classificação de infrações do CTB?",
    "respostas": [
      "Estacionar em local permitido",
      "Conduzir com a carteira de habilitação vencida",
      "Estacionar em área de carga e descarga",
      "Ultrapassar o limite de velocidade em até 10%"
    ],
    "correta": 3,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  // sinais sonoros
  {
    "pergunta": "O que significa um apito curto e um apito longo dados pelo guarda de trânsito?",
    "respostas": [
      "Pare",
      "Siga",
      "Reduza a velocidade",
      "Acelere"
    ],
    "correta": 0,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Qual é a indicação do guarda de trânsito quando ele dá dois apitos curtos?",
    "respostas": [
      "Pare",
      "Siga",
      "Acelere",
      "Reduza a velocidade"
    ],
    "correta": 1,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Um guarda de trânsito dá um apito longo. O que isso sinaliza?",
    "respostas": [
      "Siga",
      "Pare",
      "Reduza a velocidade",
      "Acelere"
    ],
    "correta": 1,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Como o guarda de trânsito sinaliza para reduzir a velocidade usando apitos?",
    "respostas": [
      "Um apito longo",
      "Dois apitos curtos",
      "Três apitos curtos",
      "Um apito curto e um longo"
    ],
    "correta": 2,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Qual é a sequência de apitos utilizada pelo guarda para sinalizar que o motorista deve acelerar?",
    "respostas": [
      "Dois apitos curtos",
      "Um apito longo",
      "Um apito curto e um longo",
      "Três apitos curtos"
    ],
    "correta": 3,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  // geral
  {
    "pergunta": "Ao avistar um pedestre atravessando a via sobre a faixa de pedestres, o condutor deve:",
    "respostas": [
      "Acelerar para passar antes do pedestre",
      "Reduzir a velocidade e parar se necessário",
      "Buzinar para alertar o pedestre",
      "Continuar a velocidade normal, pois tem a preferência"
    ],
    "correta": 1,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Qual a conduta correta do motorista ao perceber que está sentindo sonolência enquanto dirige?",
    "respostas": [
      "Abrir as janelas e continuar dirigindo",
      "Parar o veículo em um local seguro e descansar",
      "Aumentar o volume do rádio para se manter acordado",
      "Tomar uma bebida energética e continuar dirigindo"
    ],
    "correta": 1,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Quando o semáforo está amarelo, o motorista deve:",
    "respostas": [
      "Acelerar para passar antes de ficar vermelho",
      "Parar o veículo, se for seguro fazê-lo",
      "Parar imediatamente, mesmo se estiver próximo ao cruzamento",
      "Ignorar e seguir como se estivesse verde"
    ],
    "correta": 1,
    "imagem": "" // Insira URL da imagem, se disponível
  },
  {
    "pergunta": "Qual é a prioridade de passagem em uma rotatória?",
    "respostas": [
      "O veículo que está dentro da rotatória",
      "O veículo que está entrando na rotatória",
      "O veículo de maior porte",
      "O veículo que estiver na faixa da direita"
    ],
    "correta": 0,
    "imagem": "" // Insira URL da imagem, se disponível
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
