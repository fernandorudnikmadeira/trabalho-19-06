const Caixaprincipal = document.querySelector(".Caixa-principal");
const Caixapergunta = document.querySelector(".Caixa-pergunta");
const Caixaalternativa = document.querySelector(".Caixa-alternativa");
const Caixaresposta = document.querySelector(".Caixa-resposta");
const Caixarusultado = document.querySelector(".Caixa-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 2", 
        alternativas: [
            "alternativa 1",
        "alternativa 2"
       ]
    },
    {
        enunciado: "pergunta 3", 
        alternativas: [
            "alternativa 1",
        "alternativa 2"
       ]
    },
    {
        enunciado: "pergunta 4", 
        alternativas: [
            "alternativa 1",
        "alternativa 2"
       ]
    }

];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    Caixapergunta.textContent = perguntaAtual.enunciado;
}

mostraPergunta();