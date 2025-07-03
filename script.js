const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual será o jogo, da Copa do Mundo de Clubes FIFA 2025 em que se enfrentarão uma equipe espanhola e outra alemã, e que foi final da Champions League 2023?",
        alternativas: [
            {
                texto: "Real Madrid X Borussia Dortmund",
                afirmacao: "afirmacao"
            },
            {
                texto: "Atlético de Madrid X Bayern de Munique",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Os irmãos Jobe e Jude Bellingham jogam em duas equipes, que se enfrentarão pelas quartas de final do torneio. Que equipes são essas?",
        alternativas: [
            {
                texto: "Paris Saint Germain e Bayern de Munique",
                afirmacao: "afirmacao"
            },
            {
                texto: "Borussia Dortmund e Real Madrid",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Paris Saint Germain e Bayerns de Munique se enfrentam pelas quartas de final. Em que temporada essas equipes decidiram a Champions League, recentemente?",
        alternativas: [
            {
                texto: "2019/2020",
                afirmacao: "afirmacao"
            },
            {
                texto: "2023/2024",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Paris Saint Germain x Bayern de Munique será disputado em estádio coberto, o Mercedes Benz Stadium. Existe um sistema de alerta climático, que está paralisando algumas partidas do torneio. Sobre que é o alerta?",
        alternativas: [
            {
                texto: "Temperaturas acima de 38°C",
                afirmacao: "afirmacao"
            },
            {
                texto: "Tempestades de raios a uma distância considerável do local da partida",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "O Mundial de Clubes 2021, disputado em fevereiro de 2022, foi disputado por duas equipes que se enfrentarão nas quartas de final da Copa do Mundo de Clubes. Quais equipes são essas?",
        alternativas: [
            {
                texto: "Fluminense X Al-Hilal",
                afirmacao: "afirmacao"
            },
            {
                texto: "Palmeiras X Chelsea",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual partida das quartas de final do torneio será realizada entre uma equipe brasileira e outra ?",
        alternativas: [
            {
                texto: "Fluminense X Al-Hilal",
                afirmacao: "afirmacao"
            },
            {
                texto: "Flamengo X Al-Nassr",
                afirmacao: "afirmacao"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();