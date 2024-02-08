const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para exibir uma caixa de diálogo com uma mensagem no JavaScript?",
        respostas: [
            "alert()",
            "prompt()",
            "confirm()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a sintaxe correta para escrever um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
        respostas: [
            "*",
            "-",
            "+"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para converter um string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "toFixed()",
            "parseFloat()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?",
        respostas: [
            "querySelector()",
            "getElementById()",
            "getElementsByClassName()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Atribuição",
            "Comparação solta (apenas valor)",
            "Comparação estrita (valor e tipo)"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorna o elemento removido?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'push()' em JavaScript?",
        respostas: [
            "Adicionar um ou mais elementos ao final de um array",
            "Remover um elemento do final de um array",
            "Inverter a ordem dos elementos em um array"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para converter uma array em uma string?",
        respostas: [
            "concat()",
            "slice()",
            "join()"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');

const corretas = new Set() // estrutura que armazena objetos e nao repete informação
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//nesse laço eu pego cada item de perguntas e subtituo eles pelo valor do objeto
for (let item of perguntas) {
    // clonamos os items do quiz no caso a div template colocando num laço de repetição
    const quizItem = template.content.cloneNode(true);
    //instancia o H3 substituindo o valor dele pelo valor da pergunta
    quizItem.querySelector('h3').textContent = item.pergunta;

    // laço de repetição para gerar as respostas em tela
    for (let resposta of item.respostas) {
        // laço de repetição que pega as tags do html e cloca ela e as demais respostas
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        // arrow function para aplicar um evento no radio da resposta
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        
        
        // appendChild para adicionar o elemento filho ao pai
        quizItem.querySelector('dl').appendChild(dt);
    }
    // remove para remover o primeiro elemente da dt dentro da dl
    quizItem.querySelector('dl dt').remove();

    // adiciona o elemente filho ao pai
    quiz.appendChild(quizItem);
}