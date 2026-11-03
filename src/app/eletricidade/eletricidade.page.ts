import { Component } from '@angular/core';

@Component({
  selector: 'app-eletricidade',
  templateUrl: './eletricidade.page.html',
  styleUrls: ['./eletricidade.page.scss'],
  standalone: false,
})
export class EletricidadePage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é corrente elétrica?',
      options: [
        'A quantidade de calor de um material.',
        'O movimento ordenado de cargas elétricas.',
        'A resistência de um circuito.',
        'A força gravitacional sobre os elétrons.',
        'A energia armazenada em uma bateria.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A corrente elétrica corresponde ao movimento ordenado de cargas elétricas através de um condutor.',
      feedbackIncorrect: 'Incorreto! Corrente elétrica é o movimento ordenado de cargas elétricas através de um condutor.'
    },

    {
      question: 'Qual é a unidade de medida da corrente elétrica?',
      options: [
        'Volt (V)',
        'Ohm (Ω)',
        'Watt (W)',
        'Ampere (A)',
        'Joule (J)'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A corrente elétrica é medida em ampere (A).',
      feedbackIncorrect: 'Incorreto! A unidade utilizada para medir a corrente elétrica é o ampere (A).'
    },

    {
      question: 'Qual grandeza elétrica é medida em volts (V)?',
      options: [
        'Corrente elétrica',
        'Resistência elétrica',
        'Tensão elétrica',
        'Potência elétrica',
        'Carga elétrica'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O volt é a unidade utilizada para medir a tensão elétrica, também chamada de diferença de potencial.',
      feedbackIncorrect: 'Incorreto! A tensão elétrica, ou diferença de potencial, é medida em volts (V).'
    },

    {
      question: 'Segundo a Lei de Ohm, qual é a relação entre tensão, resistência e corrente?',
      options: [
        'V = R × I',
        'V = R ÷ I',
        'I = V × R',
        'R = V × I',
        'V = I ÷ R'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A Lei de Ohm é representada por V = R × I.',
      feedbackIncorrect: 'Incorreto! A relação correta entre tensão, resistência e corrente é V = R × I.'
    },

    {
      question: 'Um resistor de 10 Ω é ligado a uma tensão de 20 V. Qual é a corrente elétrica do circuito?',
      options: [
        '0,5 A',
        '1 A',
        '2 A',
        '5 A',
        '10 A'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Pela Lei de Ohm: I = V ÷ R. Então I = 20 ÷ 10 = 2 A.',
      feedbackIncorrect: 'Incorreto! Aplicando a Lei de Ohm: I = V ÷ R = 20 ÷ 10 = 2 A.'
    },

    {
      question: 'O que acontece com a corrente elétrica em um circuito quando sua resistência aumenta, mantendo a tensão constante?',
      options: [
        'A corrente aumenta.',
        'A corrente diminui.',
        'A corrente permanece sempre igual.',
        'A tensão aumenta automaticamente.',
        'A corrente se transforma em tensão.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Pela Lei de Ohm, mantendo a tensão constante, o aumento da resistência provoca uma diminuição da corrente.',
      feedbackIncorrect: 'Incorreto! Se a tensão permanece constante, aumentar a resistência faz a corrente elétrica diminuir.'
    },

    {
      question: 'Qual é a unidade de medida da resistência elétrica?',
      options: [
        'Ampere',
        'Volt',
        'Watt',
        'Ohm',
        'Joule'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A resistência elétrica é medida em ohms (Ω).',
      feedbackIncorrect: 'Incorreto! A unidade de resistência elétrica é o ohm (Ω).'
    },

    {
      question: 'Qual é a principal função de um resistor em um circuito?',
      options: [
        'Aumentar obrigatoriamente a corrente.',
        'Armazenar energia química.',
        'Dificultar a passagem da corrente elétrica.',
        'Produzir corrente elétrica sem fonte.',
        'Transformar corrente em massa.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O resistor oferece resistência à passagem da corrente elétrica e pode ser utilizado para controlar sua intensidade.',
      feedbackIncorrect: 'Incorreto! O resistor tem como uma de suas principais funções oferecer resistência à passagem da corrente elétrica.'
    },

    {
      question: 'Qual é a unidade de medida da potência elétrica?',
      options: [
        'Volt',
        'Ampere',
        'Ohm',
        'Watt',
        'Coulomb'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A potência elétrica é medida em watts (W).',
      feedbackIncorrect: 'Incorreto! A unidade de potência elétrica é o watt (W).'
    },

    {
      question: 'Um aparelho elétrico possui potência de 1000 W e funciona durante 2 horas. Qual grandeza está relacionada diretamente ao consumo de energia desse aparelho?',
      options: [
        'Tempo de funcionamento e potência.',
        'Somente a resistência.',
        'Somente a tensão.',
        'Apenas a corrente.',
        'Somente a temperatura.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O consumo de energia elétrica depende da potência do aparelho e do tempo em que ele permanece funcionando.',
      feedbackIncorrect: 'Incorreto! O consumo de energia está diretamente relacionado à potência do aparelho e ao tempo de funcionamento.'
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
