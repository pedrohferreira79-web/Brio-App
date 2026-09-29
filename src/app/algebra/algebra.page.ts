import { Component } from '@angular/core';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.page.html',
  styleUrls: ['./algebra.page.scss'],
  standalone: false,
})
export class AlgebraPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    // QUESTÃO 1
    {
      question: 'Resolva a equação: 3x + 7 = 22',
      options: [
        'x = 3',
        'x = 4',
        'x = 5',
        'x = 6',
        'x = 7'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! 3x + 7 = 22 → 3x = 15 → x = 5.',
      feedbackIncorrect: 'Incorreto! A resposta correta é x = 5.'
    },

    // QUESTÃO 2
    {
      question: 'Simplifique a expressão: 4x + 3x - 2',
      options: [
        '7x - 2',
        '7x + 2',
        'x - 2',
        '12x - 2',
        '7x'
      ],
      answer: 0,
      feedbackCorrect: 'Muito bem! 4x + 3x = 7x, então o resultado é 7x - 2.',
      feedbackIncorrect: 'Incorreto! A resposta correta é 7x - 2.'
    },

    // QUESTÃO 3
    {
      question: 'Qual é a forma fatorada de x² + 5x + 6?',
      options: [
        '(x + 1)(x + 6)',
        '(x + 2)(x + 3)',
        '(x - 2)(x - 3)',
        '(x + 5)(x + 1)',
        '(x - 1)(x - 6)'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! (x + 2)(x + 3) = x² + 5x + 6.',
      feedbackIncorrect: 'Incorreto! A forma fatorada correta é (x + 2)(x + 3).'
    },

    // QUESTÃO 4
    {
      question: 'Resolva o sistema: x + y = 10 e x - y = 2.',
      options: [
        'x = 4 e y = 6',
        'x = 5 e y = 5',
        'x = 6 e y = 4',
        'x = 7 e y = 3',
        'x = 8 e y = 2'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Somando as equações, 2x = 12, então x = 6 e y = 4.',
      feedbackIncorrect: 'Incorreto! A resposta correta é x = 6 e y = 4.'
    },

    // QUESTÃO 5
    {
      question: 'Qual é a solução da equação x² - 9 = 0?',
      options: [
        'x = 3',
        'x = -3',
        'x = 0',
        'x = 3 ou x = -3',
        'x = 9'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! x² = 9, portanto x = 3 ou x = -3.',
      feedbackIncorrect: 'Incorreto! A resposta correta é x = 3 ou x = -3.'
    },

    // QUESTÃO 6
    {
      question: 'Simplifique: (2x²)(3x³)',
      options: [
        '5x⁵',
        '6x⁵',
        '6x⁶',
        '5x⁶',
        '6x'
      ],
      answer: 1,
      feedbackCorrect: 'Muito bem! Multiplicamos 2 × 3 = 6 e somamos os expoentes: x² × x³ = x⁵.',
      feedbackIncorrect: 'Incorreto! A resposta correta é 6x⁵.'
    },

    // QUESTÃO 7
    {
      question: 'Resolva a inequação: 2x + 4 > 10',
      options: [
        'x > 2',
        'x > 3',
        'x < 3',
        'x > 4',
        'x < 4'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! 2x + 4 > 10 → 2x > 6 → x > 3.',
      feedbackIncorrect: 'Incorreto! A resposta correta é x > 3.'
    },

    // QUESTÃO 8
    {
      question: 'Se f(x) = 2x + 5, qual é o valor de f(4)?',
      options: [
        '9',
        '11',
        '12',
        '13',
        '15'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! f(4) = 2(4) + 5 = 8 + 5 = 13.',
      feedbackIncorrect: 'Incorreto! A resposta correta é 13.'
    },

    // QUESTÃO 9
    {
      question: 'Qual é o resultado de (x + 4)²?',
      options: [
        'x² + 4x + 16',
        'x² + 8x + 16',
        'x² + 16',
        'x² + 8x + 8',
        'x² + 4x + 8'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! (x + 4)² = x² + 8x + 16.',
      feedbackIncorrect: 'Incorreto! A resposta correta é x² + 8x + 16.'
    },

    // QUESTÃO 10
    {
      question: 'Se 2x - 3 = 11, qual é o valor de x?',
      options: [
        'x = 5',
        'x = 6',
        'x = 7',
        'x = 8',
        'x = 9'
      ],
      answer: 2,
      feedbackCorrect: 'Parabéns! 2x - 3 = 11 → 2x = 14 → x = 7.',
      feedbackIncorrect: 'Incorreto! A resposta correta é x = 7.'
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