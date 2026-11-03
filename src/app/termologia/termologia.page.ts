import { Component } from '@angular/core';

@Component({
  selector: 'app-termologia',
  templateUrl: './termologia.page.html',
  styleUrls: ['./termologia.page.scss'],
  standalone: false,
})
export class TermologiaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é temperatura?',
      options: [
        'A quantidade total de matéria de um corpo.',
        'Uma medida relacionada ao grau de agitação das partículas de um corpo.',
        'A quantidade de espaço ocupada por um corpo.',
        'A força exercida por um corpo.',
        'A quantidade de energia elétrica de um objeto.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A temperatura está relacionada ao grau de agitação das partículas que formam um corpo.',
      feedbackIncorrect: 'Incorreto! A temperatura está relacionada ao grau de agitação das partículas de um corpo.'
    },

    {
      question: 'Qual é a unidade de temperatura utilizada como unidade fundamental no Sistema Internacional?',
      options: [
        'Celsius (°C)',
        'Fahrenheit (°F)',
        'Kelvin (K)',
        'Joule (J)',
        'Newton (N)'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! No Sistema Internacional de Unidades, a unidade fundamental de temperatura é o kelvin (K).',
      feedbackIncorrect: 'Incorreto! A unidade fundamental de temperatura no Sistema Internacional é o kelvin (K).'
    },

    {
      question: 'Qual é a temperatura correspondente a 0 °C na escala Kelvin?',
      options: [
        '0 K',
        '100 K',
        '173 K',
        '273 K',
        '373 K'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! 0 °C corresponde aproximadamente a 273 K.',
      feedbackIncorrect: 'Incorreto! Para converter Celsius em Kelvin, somamos aproximadamente 273. Assim, 0 °C = 273 K.'
    },

    {
      question: 'O que acontece com a maioria dos materiais quando sua temperatura aumenta?',
      options: [
        'Eles sofrem contração obrigatoriamente.',
        'Eles desaparecem.',
        'Eles podem sofrer dilatação.',
        'Sua massa aumenta automaticamente.',
        'Sua composição química sempre muda.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O aumento da temperatura pode provocar a dilatação térmica dos materiais.',
      feedbackIncorrect: 'Incorreto! O aumento da temperatura geralmente provoca dilatação térmica em muitos materiais.'
    },

    {
      question: 'Qual processo de transferência de calor ocorre principalmente por meio do movimento de um fluido?',
      options: [
        'Condução',
        'Convecção',
        'Radiação',
        'Reflexão',
        'Fusão'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A convecção ocorre através do movimento de massas de um fluido, como líquidos e gases.',
      feedbackIncorrect: 'Incorreto! A transferência de calor causada pelo movimento de um fluido é chamada de convecção.'
    },

    {
      question: 'Qual processo permite que o calor do Sol chegue à Terra através do espaço?',
      options: [
        'Condução',
        'Convecção',
        'Radiação',
        'Evaporação',
        'Solidificação'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A radiação térmica não precisa de um meio material e permite que a energia do Sol atravesse o espaço.',
      feedbackIncorrect: 'Incorreto! O calor do Sol chega à Terra principalmente por meio da radiação térmica.'
    },

    {
      question: 'Quando uma substância passa do estado sólido para o líquido, ocorre:',
      options: [
        'Condensação',
        'Solidificação',
        'Fusão',
        'Sublimação',
        'Vaporização'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A passagem do estado sólido para o líquido é chamada de fusão.',
      feedbackIncorrect: 'Incorreto! A fusão é a mudança de estado do sólido para o líquido.'
    },

    {
      question: 'A passagem de uma substância do estado líquido para o gasoso é chamada de:',
      options: [
        'Fusão',
        'Solidificação',
        'Condensação',
        'Vaporização',
        'Sublimação'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A vaporização é a passagem do estado líquido para o gasoso.',
      feedbackIncorrect: 'Incorreto! A mudança do estado líquido para o gasoso é chamada de vaporização.'
    },

    {
      question: 'O que acontece durante a condensação?',
      options: [
        'Uma substância passa do sólido para o líquido.',
        'Uma substância passa do líquido para o sólido.',
        'Uma substância passa do gasoso para o líquido.',
        'Uma substância passa do sólido para o gasoso.',
        'Uma substância aumenta obrigatoriamente sua temperatura.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Condensação é a passagem do estado gasoso para o líquido.',
      feedbackIncorrect: 'Incorreto! Na condensação, uma substância passa do estado gasoso para o estado líquido.'
    },

    {
      question: 'Uma barra de metal é aquecida e aumenta seu comprimento. Esse fenômeno é chamado de:',
      options: [
        'Dilatação térmica',
        'Condensação',
        'Fusão',
        'Convecção',
        'Irradiação'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O aumento das dimensões de um corpo provocado pelo aquecimento é chamado de dilatação térmica.',
      feedbackIncorrect: 'Incorreto! O aumento das dimensões de um material devido ao aumento da temperatura é chamado de dilatação térmica.'
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
