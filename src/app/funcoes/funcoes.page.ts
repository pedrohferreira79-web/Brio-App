import { Component } from '@angular/core';

@Component({
  selector: 'app-funcoes',
  templateUrl: './funcoes.page.html',
  styleUrls: ['./funcoes.page.scss'],
  standalone: false,
})
export class FuncoesPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Se f(x) = 2x + 3, qual é o valor de f(4)?',
      options: [
        '7',
        '9',
        '10',
        '11',
        '12'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! f(4) = 2(4) + 3 = 8 + 3 = 11.',
      feedbackIncorrect: 'Incorreto! f(4) = 2(4) + 3 = 11.'
    },

    {
      question: 'Qual é o coeficiente angular da função f(x) = 5x - 2?',
      options: [
        '-5',
        '-2',
        '2',
        '5',
        '7'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Na função f(x) = ax + b, o coeficiente angular é o valor de a. Portanto, a = 5.',
      feedbackIncorrect: 'Incorreto! O coeficiente angular é o número que acompanha x. Portanto, é 5.'
    },

    {
      question: 'Qual é a raiz da função f(x) = 3x - 12?',
      options: [
        '2',
        '3',
        '4',
        '5',
        '6'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Para encontrar a raiz: 3x - 12 = 0 → 3x = 12 → x = 4.',
      feedbackIncorrect: 'Incorreto! A raiz é encontrada fazendo 3x - 12 = 0. Portanto, x = 4.'
    },

    {
      question: 'A função f(x) = x² - 4x + 3 possui quais raízes?',
      options: [
        '1 e 2',
        '1 e 3',
        '2 e 3',
        '-1 e 3',
        '-1 e -3'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! x² - 4x + 3 = (x - 1)(x - 3). As raízes são 1 e 3.',
      feedbackIncorrect: 'Incorreto! As raízes são x = 1 e x = 3.'
    },

    {
      question: 'Qual é o valor de f(2) para a função f(x) = x² + 3x - 1?',
      options: [
        '5',
        '7',
        '8',
        '9',
        '10'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! f(2) = 2² + 3(2) - 1 = 4 + 6 - 1 = 9.',
      feedbackIncorrect: 'Incorreto! f(2) = 4 + 6 - 1 = 9.'
    },

    {
      question: 'Qual é o ponto onde a função f(x) = 2x + 6 intercepta o eixo y?',
      options: [
        '(0, 2)',
        '(0, 4)',
        '(0, 6)',
        '(6, 0)',
        '(2, 6)'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! No eixo y, x = 0. Portanto, f(0) = 6 e o ponto é (0, 6).',
      feedbackIncorrect: 'Incorreto! Quando x = 0, f(x) = 6. Portanto, o ponto é (0, 6).'
    },

    {
      question: 'Qual é o discriminante (Δ) da equação x² - 6x + 5 = 0?',
      options: [
        '4',
        '6',
        '10',
        '16',
        '36'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Δ = b² - 4ac = (-6)² - 4(1)(5) = 36 - 20 = 16.',
      feedbackIncorrect: 'Incorreto! O discriminante é Δ = 36 - 20 = 16.'
    },

    {
      question: 'Qual é o vértice da parábola f(x) = x² - 4x + 3?',
      options: [
        '(1, 0)',
        '(2, -1)',
        '(2, 1)',
        '(-2, -1)',
        '(4, 3)'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O vértice é V(2, -1).',
      feedbackIncorrect: 'Incorreto! O vértice da parábola é V(2, -1).'
    },

    {
      question: 'Qual das funções abaixo é uma função do 2º grau?',
      options: [
        'f(x) = 2x + 1',
        'f(x) = 5',
        'f(x) = x² - 3x + 2',
        'f(x) = 4x - 7',
        'f(x) = 10x'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Uma função do 2º grau possui x². Portanto, f(x) = x² - 3x + 2.',
      feedbackIncorrect: 'Incorreto! A função do 2º grau é f(x) = x² - 3x + 2.'
    },

    {
      question: 'Se f(x) = -2x + 10, para qual valor de x temos f(x) = 0?',
      options: [
        '2',
        '3',
        '4',
        '5',
        '6'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! -2x + 10 = 0 → -2x = -10 → x = 5.',
      feedbackIncorrect: 'Incorreto! Resolvendo -2x + 10 = 0, temos x = 5.'
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