import { Component } from '@angular/core';
import { GamificationService } from '../services/gamification.service';

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.page.html',
  styleUrls: ['./geometria.page.scss'],
  standalone: false,
})
export class GeometriaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  constructor(
    private gamificationService: GamificationService
  ) { }

  quiz = [

    {
      question: 'Qual é a área de um retângulo com 8 cm de comprimento e 5 cm de largura?',
      options: [
        '13 cm²',
        '26 cm²',
        '40 cm²',
        '45 cm²',
        '50 cm²'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A área do retângulo é 8 × 5 = 40 cm².',
      feedbackIncorrect: 'Incorreto! A área é calculada multiplicando comprimento × largura. Portanto, 8 × 5 = 40 cm².'
    },

    {
      question: 'Um quadrado possui lado de 7 cm. Qual é o seu perímetro?',
      options: [
        '14 cm',
        '21 cm',
        '28 cm',
        '35 cm',
        '49 cm'
      ],
      answer: 2,
      feedbackCorrect: 'Muito bem! O perímetro do quadrado é 4 × 7 = 28 cm.',
      feedbackIncorrect: 'Incorreto! Um quadrado possui quatro lados iguais. Então, 4 × 7 = 28 cm.'
    },

    {
      question: 'Qual é a área de um triângulo com base de 10 cm e altura de 6 cm?',
      options: [
        '20 cm²',
        '30 cm²',
        '40 cm²',
        '50 cm²',
        '60 cm²'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A área do triângulo é (10 × 6) ÷ 2 = 30 cm².',
      feedbackIncorrect: 'Incorreto! A fórmula é base × altura ÷ 2. Portanto, (10 × 6) ÷ 2 = 30 cm².'
    },

    {
      question: 'Um círculo possui raio de 5 cm. Considerando π = 3,14, qual é aproximadamente sua área?',
      options: [
        '31,4 cm²',
        '50 cm²',
        '62,8 cm²',
        '78,5 cm²',
        '100 cm²'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A área é π × r² = 3,14 × 25 = 78,5 cm².',
      feedbackIncorrect: 'Incorreto! A fórmula da área do círculo é π × r². Então, 3,14 × 5² = 78,5 cm².'
    },

    {
      question: 'Um triângulo retângulo possui catetos de 6 cm e 8 cm. Qual é o comprimento da hipotenusa?',
      options: [
        '9 cm',
        '10 cm',
        '12 cm',
        '14 cm',
        '16 cm'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Pelo Teorema de Pitágoras: 6² + 8² = 36 + 64 = 100. A raiz de 100 é 10.',
      feedbackIncorrect: 'Incorreto! Pelo Teorema de Pitágoras, a hipotenusa é √(6² + 8²) = 10 cm.'
    },

    {
      question: 'Qual é a soma dos ângulos internos de um triângulo?',
      options: [
        '90°',
        '120°',
        '180°',
        '270°',
        '360°'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A soma dos ângulos internos de qualquer triângulo é 180°.',
      feedbackIncorrect: 'Incorreto! A soma dos ângulos internos de um triângulo é sempre 180°.'
    },

    {
      question: 'Um trapézio possui bases de 12 cm e 8 cm e altura de 5 cm. Qual é sua área?',
      options: [
        '40 cm²',
        '45 cm²',
        '50 cm²',
        '55 cm²',
        '60 cm²'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A área é ((12 + 8) × 5) ÷ 2 = 50 cm².',
      feedbackIncorrect: 'Incorreto! A fórmula é ((base maior + base menor) × altura) ÷ 2. O resultado é 50 cm².'
    },

    {
      question: 'Qual é o volume de um cubo com aresta de 4 cm?',
      options: [
        '16 cm³',
        '32 cm³',
        '48 cm³',
        '64 cm³',
        '96 cm³'
      ],
      answer: 3,
      feedbackCorrect: 'Muito bem! O volume do cubo é 4³ = 64 cm³.',
      feedbackIncorrect: 'Incorreto! O volume do cubo é aresta³. Portanto, 4³ = 64 cm³.'
    },

    {
      question: 'Um ângulo de 120° é classificado como:',
      options: [
        'Ângulo agudo',
        'Ângulo reto',
        'Ângulo obtuso',
        'Ângulo raso',
        'Ângulo completo'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Um ângulo maior que 90° e menor que 180° é chamado de obtuso.',
      feedbackIncorrect: 'Incorreto! Um ângulo de 120° é maior que 90° e menor que 180°, portanto é obtuso.'
    },

    {
      question: 'Um retângulo possui área de 72 cm² e comprimento de 9 cm. Qual é sua largura?',
      options: [
        '6 cm',
        '7 cm',
        '8 cm',
        '9 cm',
        '10 cm'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Área = comprimento × largura. Então 72 = 9 × largura, resultando em 8 cm.',
      feedbackIncorrect: 'Incorreto! Dividindo a área pelo comprimento: 72 ÷ 9 = 8 cm.'
    }

  ];


  answer(option: number) {

    if (option === this.quiz[this.perguntaAtual].answer) {

      // Aumenta a quantidade de acertos do quiz
      this.score++;

      // Adiciona 5 XP para Matemática
      this.gamificationService.adicionarXP(
        'matematica',
        5
      );

      // Registra o exercício concluído
      this.gamificationService.adicionarExercicio();

      this.correct = true;

      // Marca Geometria como concluída ao atingir 10/10
      if (this.score === this.quiz.length) {

        this.gamificationService.concluirAssunto(
          'geometria'
        );

      }

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