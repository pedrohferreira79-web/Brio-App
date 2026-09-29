import { Component } from '@angular/core';

@Component({
  selector: 'app-interpretacao',
  templateUrl: './interpretacao.page.html',
  styleUrls: ['./interpretacao.page.scss'],
  standalone: false,
})
export class InterpretacaoPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Leia: "Mesmo cansado depois de um longo dia de trabalho, João decidiu estudar para a prova." Qual ideia pode ser identificada no trecho?',
      options: [
        'João não precisava estudar.',
        'João estava descansado.',
        'João desistiu de estudar.',
        'João estudou apesar do cansaço.',
        'João não tinha uma prova.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A expressão "mesmo cansado" mostra que João estudou apesar de estar cansado.',
      feedbackIncorrect: 'Incorreto! O trecho mostra que João decidiu estudar mesmo estando cansado.'
    },

    {
      question: 'Leia: "Marina levou um guarda-chuva ao sair de casa. Pouco depois, começou a chover." O que podemos inferir?',
      options: [
        'Marina sabia que estava nevando.',
        'Marina provavelmente esperava ou percebeu a possibilidade de chuva.',
        'Marina não gostava de chuva.',
        'Marina esqueceu o guarda-chuva.',
        'Marina voltou imediatamente para casa.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! É possível inferir que Marina esperava ou percebeu a possibilidade de chuva.',
      feedbackIncorrect: 'Incorreto! O fato de Marina levar um guarda-chuva permite inferir que ela esperava ou percebeu a possibilidade de chuva.'
    },

    {
      question: 'Leia: "A biblioteca estava silenciosa. Alguns estudantes liam enquanto outros faziam anotações." Qual é o assunto principal do trecho?',
      options: [
        'Uma discussão entre estudantes.',
        'O barulho de uma biblioteca.',
        'Estudantes realizando atividades em uma biblioteca.',
        'Uma biblioteca fechada.',
        'Uma aula de matemática.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O trecho descreve estudantes lendo e fazendo anotações dentro de uma biblioteca.',
      feedbackIncorrect: 'Incorreto! A ideia principal é a presença de estudantes realizando atividades na biblioteca.'
    },

    {
      question: 'Na frase "O atleta correu rapidamente para alcançar o adversário", a palavra "rapidamente" indica:',
      options: [
        'Lugar',
        'Tempo',
        'Modo',
        'Quantidade',
        'Causa'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! "Rapidamente" indica o modo como o atleta correu.',
      feedbackIncorrect: 'Incorreto! A palavra "rapidamente" indica o modo da ação.'
    },

    {
      question: 'Leia: "Pedro estudou durante toda a semana. No dia da prova, sentiu-se preparado para responder às questões." Qual relação existe entre as duas frases?',
      options: [
        'Causa e consequência.',
        'Contradição.',
        'Comparação.',
        'Dúvida.',
        'Tempo e lugar.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O estudo durante a semana contribuiu para que Pedro se sentisse preparado para a prova.',
      feedbackIncorrect: 'Incorreto! Existe uma relação de causa e consequência entre estudar e sentir-se preparado.'
    },

    {
      question: 'Qual é a finalidade principal de um texto publicitário?',
      options: [
        'Contar uma história fictícia.',
        'Apresentar exclusivamente informações científicas.',
        'Defender uma personagem.',
        'Convencer ou influenciar o público a respeito de algo.',
        'Ensinar regras gramaticais.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Textos publicitários geralmente buscam convencer ou influenciar o público.',
      feedbackIncorrect: 'Incorreto! A principal finalidade de um texto publicitário é convencer ou influenciar o público.'
    },

    {
      question: 'Leia: "Lucas olhou para o relógio e percebeu que estava atrasado. Pegou sua mochila e saiu correndo." O que motivou Lucas a sair correndo?',
      options: [
        'Ele estava com fome.',
        'Ele percebeu que estava atrasado.',
        'Ele queria fazer exercícios.',
        'Ele perdeu sua mochila.',
        'Ele estava esperando um amigo.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Lucas saiu correndo porque percebeu que estava atrasado.',
      feedbackIncorrect: 'Incorreto! O próprio texto informa que Lucas percebeu que estava atrasado.'
    },

    {
      question: 'Na frase "Embora estivesse chovendo, os alunos participaram da atividade", a palavra "embora" estabelece uma ideia de:',
      options: [
        'Causa',
        'Finalidade',
        'Condição',
        'Concessão',
        'Conclusão'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! "Embora" introduz uma ideia de concessão, mostrando um fato contrário ao esperado.',
      feedbackIncorrect: 'Incorreto! "Embora" é uma conjunção que estabelece uma ideia de concessão.'
    },

    {
      question: 'Leia: "A tecnologia facilita diversas tarefas do cotidiano, mas seu uso excessivo pode trazer problemas." Qual é a posição apresentada no trecho?',
      options: [
        'A tecnologia sempre causa problemas.',
        'A tecnologia não possui nenhuma utilidade.',
        'A tecnologia pode ser útil, mas seu uso excessivo pode ser prejudicial.',
        'A tecnologia deve ser abandonada.',
        'A tecnologia serve apenas para diversão.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O trecho apresenta tanto um benefício da tecnologia quanto uma possível consequência de seu uso excessivo.',
      feedbackIncorrect: 'Incorreto! O texto apresenta uma visão equilibrada: a tecnologia ajuda, mas seu excesso pode causar problemas.'
    },

    {
      question: 'Quando um leitor precisa descobrir uma informação que não está escrita diretamente no texto, mas pode ser deduzida a partir dele, ele está realizando uma:',
      options: [
        'Cópia',
        'Inferência',
        'Tradução',
        'Citação',
        'Descrição'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Inferir significa chegar a uma conclusão com base nas informações disponíveis no texto.',
      feedbackIncorrect: 'Incorreto! O processo de deduzir uma informação a partir do texto é chamado de inferência.'
    }

  ];


  answer(option: number) {

    if (option === this.quiz[this.perguntaAtual].answer) {

      this.score++;
      this.correct = true;

    } else {

      this.correct = false;

    }

    this.showAnswer = true;
  }


  nextQuestion() {

    this.perguntaAtual++;
    this.showAnswer = false;

  }

}
