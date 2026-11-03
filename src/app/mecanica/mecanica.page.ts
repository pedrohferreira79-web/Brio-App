import { Component } from '@angular/core';

@Component({
  selector: 'app-mecanica',
  templateUrl: './mecanica.page.html',
  styleUrls: ['./mecanica.page.scss'],
  standalone: false,
})
export class MecanicaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Um carro percorre 120 km em 2 horas. Qual é sua velocidade média?',
      options: [
        '40 km/h',
        '50 km/h',
        '60 km/h',
        '70 km/h',
        '80 km/h'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A velocidade média é calculada dividindo a distância pelo tempo: 120 ÷ 2 = 60 km/h.',
      feedbackIncorrect: 'Incorreto! A velocidade média é distância dividida pelo tempo. Nesse caso: 120 ÷ 2 = 60 km/h.'
    },

    {
      question: 'De acordo com a 1ª Lei de Newton, um corpo tende a manter seu estado de movimento quando:',
      options: [
        'Existe sempre uma força resultante sobre ele.',
        'A força resultante sobre ele é nula.',
        'Sua velocidade aumenta constantemente.',
        'Sua massa diminui.',
        'Ele está necessariamente em movimento circular.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Pela Lei da Inércia, um corpo mantém o repouso ou o movimento retilíneo uniforme quando a força resultante é nula.',
      feedbackIncorrect: 'Incorreto! A 1ª Lei de Newton afirma que um corpo tende a manter seu estado de movimento quando a força resultante é nula.'
    },

    {
      question: 'Uma força de 20 N atua sobre um objeto de massa 5 kg. Qual é a aceleração produzida?',
      options: [
        '2 m/s²',
        '3 m/s²',
        '4 m/s²',
        '5 m/s²',
        '10 m/s²'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Pela 2ª Lei de Newton: F = m · a. Então 20 = 5 · a, resultando em a = 4 m/s².',
      feedbackIncorrect: 'Incorreto! Pela fórmula F = m · a, temos 20 = 5 · a. Portanto, a aceleração é 4 m/s².'
    },

    {
      question: 'Qual força é responsável por atrair os corpos em direção à superfície da Terra?',
      options: [
        'Força elástica',
        'Força magnética',
        'Força de atrito',
        'Força gravitacional',
        'Força centrípeta'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A força gravitacional da Terra atrai os corpos em direção ao seu centro.',
      feedbackIncorrect: 'Incorreto! É a força gravitacional que provoca a atração dos corpos em direção à Terra.'
    },

    {
      question: 'Um objeto está se deslocando com velocidade constante em linha reta. Qual é sua aceleração?',
      options: [
        '0 m/s²',
        '1 m/s²',
        '5 m/s²',
        '10 m/s²',
        '20 m/s²'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Quando a velocidade permanece constante em módulo e direção, a aceleração é igual a zero.',
      feedbackIncorrect: 'Incorreto! No movimento retilíneo uniforme, a velocidade permanece constante e a aceleração é zero.'
    },

    {
      question: 'O trabalho realizado por uma força está relacionado principalmente:',
      options: [
        'À força aplicada e ao deslocamento do objeto.',
        'Apenas à massa do objeto.',
        'Somente à velocidade inicial.',
        'Apenas ao tempo de movimento.',
        'Somente à temperatura do objeto.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O trabalho de uma força depende da força aplicada e do deslocamento, considerando também o ângulo entre eles.',
      feedbackIncorrect: 'Incorreto! O trabalho está relacionado à força aplicada e ao deslocamento produzido por ela.'
    },

    {
      question: 'Qual é a unidade de energia no Sistema Internacional de Unidades?',
      options: [
        'Newton',
        'Watt',
        'Joule',
        'Pascal',
        'Metro'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A unidade de energia e trabalho no Sistema Internacional é o joule (J).',
      feedbackIncorrect: 'Incorreto! A unidade de energia no Sistema Internacional é o joule (J).'
    },

    {
      question: 'Um objeto possui massa de 10 kg e está sujeito a uma força resultante de 30 N. Qual é sua aceleração?',
      options: [
        '1 m/s²',
        '2 m/s²',
        '3 m/s²',
        '4 m/s²',
        '5 m/s²'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Aplicando F = m · a: 30 = 10 · a. Portanto, a = 3 m/s².',
      feedbackIncorrect: 'Incorreto! Pela 2ª Lei de Newton, 30 = 10 · a, então a aceleração é 3 m/s².'
    },

    {
      question: 'O que acontece com a energia cinética de um objeto quando sua velocidade aumenta?',
      options: [
        'Sempre diminui.',
        'Permanece necessariamente igual.',
        'Aumenta.',
        'Torna-se zero.',
        'Transforma-se automaticamente em massa.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A energia cinética depende do quadrado da velocidade. Portanto, quando a velocidade aumenta, a energia cinética também aumenta.',
      feedbackIncorrect: 'Incorreto! A energia cinética é proporcional ao quadrado da velocidade, portanto aumenta quando a velocidade aumenta.'
    },

    {
      question: 'Qual situação representa principalmente a ação da força de atrito?',
      options: [
        'Um objeto caindo em direção ao solo.',
        'Um ímã atraindo um objeto metálico.',
        'Um carro reduzindo sua velocidade ao frear.',
        'A Lua orbitando a Terra.',
        'Uma pedra sendo levantada por uma pessoa.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O atrito entre os pneus e o sistema de frenagem contribui para a redução da velocidade do carro.',
      feedbackIncorrect: 'Incorreto! O atrito atua, por exemplo, durante a frenagem de um carro, ajudando a reduzir sua velocidade.'
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
