import { Component } from '@angular/core';

@Component({
  selector: 'app-ecologia',
  templateUrl: './ecologia.page.html',
  styleUrls: ['./ecologia.page.scss'],
  standalone: false,
})
export class EcologiaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é um ecossistema?',
      options: [
        'Apenas os animais de uma determinada região.',
        'Apenas as plantas de uma determinada região.',
        'O conjunto de seres vivos e fatores não vivos que interagem em uma área.',
        'Somente os fatores climáticos de uma região.',
        'Um grupo formado apenas por organismos da mesma espécie.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Um ecossistema é formado pelos seres vivos e pelos fatores não vivos que interagem em determinado ambiente.',
      feedbackIncorrect: 'Incorreto! Um ecossistema envolve os seres vivos, os fatores não vivos e as interações entre eles.'
    },

    {
      question: 'Em uma cadeia alimentar, qual é a principal função dos produtores?',
      options: [
        'Alimentar-se de outros animais.',
        'Produzir matéria orgânica, geralmente por meio da fotossíntese.',
        'Decompor organismos mortos.',
        'Consumir apenas fungos.',
        'Controlar a temperatura do ambiente.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Os produtores, como as plantas, produzem matéria orgânica utilizando energia, geralmente por meio da fotossíntese.',
      feedbackIncorrect: 'Incorreto! Os produtores são organismos capazes de produzir seu próprio alimento, principalmente por meio da fotossíntese.'
    },

    {
      question: 'Qual é o papel dos decompositores em um ecossistema?',
      options: [
        'Produzir luz para os outros organismos.',
        'Alimentar-se exclusivamente de plantas vivas.',
        'Decompor matéria orgânica e devolver nutrientes ao ambiente.',
        'Impedir a reprodução dos produtores.',
        'Produzir oxigênio durante a noite.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Fungos e bactérias decompositoras ajudam a decompor matéria orgânica e reciclar nutrientes.',
      feedbackIncorrect: 'Incorreto! Os decompositores atuam na decomposição da matéria orgânica, contribuindo para a reciclagem dos nutrientes.'
    },

    {
      question: 'Em uma cadeia alimentar, o que tende a acontecer com a quantidade de energia disponível nos níveis tróficos mais altos?',
      options: [
        'A energia aumenta a cada nível.',
        'A energia permanece exatamente igual.',
        'A energia tende a diminuir.',
        'A energia desaparece completamente no primeiro nível.',
        'A energia existe apenas nos consumidores.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A quantidade de energia disponível tende a diminuir conforme avançamos pelos níveis tróficos.',
      feedbackIncorrect: 'Incorreto! Parte da energia é utilizada pelos organismos e dissipada, portanto a quantidade disponível diminui nos níveis seguintes.'
    },

    {
      question: 'Qual alternativa apresenta apenas fatores abióticos de um ecossistema?',
      options: [
        'Plantas, animais e fungos.',
        'Bactérias, água e plantas.',
        'Temperatura, água e luz.',
        'Animais, solo e plantas.',
        'Fungos, bactérias e animais.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Temperatura, água e luz são fatores abióticos, ou seja, componentes não vivos do ambiente.',
      feedbackIncorrect: 'Incorreto! Fatores abióticos são componentes não vivos, como água, luz, temperatura e solo.'
    },

    {
      question: 'O que pode acontecer quando uma espécie é retirada de uma cadeia alimentar?',
      options: [
        'Nada muda no ecossistema.',
        'Todas as outras espécies desaparecem imediatamente.',
        'As populações de outras espécies podem ser afetadas.',
        'A quantidade de energia aumenta automaticamente.',
        'O ambiente deixa de possuir fatores abióticos.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A retirada de uma espécie pode alterar as relações alimentares e afetar outras populações.',
      feedbackIncorrect: 'Incorreto! A retirada de uma espécie pode provocar desequilíbrios nas relações existentes no ecossistema.'
    },

    {
      question: 'O que caracteriza uma relação de competição entre organismos?',
      options: [
        'Quando dois organismos disputam recursos limitados.',
        'Quando um organismo produz alimento para outro.',
        'Quando dois organismos nunca entram em contato.',
        'Quando um organismo sempre beneficia o outro.',
        'Quando todos os organismos possuem a mesma função.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A competição ocorre quando organismos disputam recursos, como alimento, espaço ou parceiros.',
      feedbackIncorrect: 'Incorreto! A competição acontece quando organismos disputam recursos que são limitados.'
    },

    {
      question: 'Qual é uma possível consequência do desmatamento em grande escala?',
      options: [
        'Aumento garantido da biodiversidade.',
        'Redução da perda de solo em todas as regiões.',
        'Perda de habitat e redução de populações de espécies.',
        'Aumento automático das áreas naturais.',
        'Eliminação dos fatores climáticos.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O desmatamento pode destruir habitats e contribuir para a redução de populações e da biodiversidade.',
      feedbackIncorrect: 'Incorreto! O desmatamento pode provocar perda de habitat e afetar negativamente diversas espécies.'
    },

    {
      question: 'O que é biodiversidade?',
      options: [
        'A quantidade de água existente em um ambiente.',
        'A variedade de seres vivos, genes e ecossistemas.',
        'A quantidade de energia disponível em uma cadeia alimentar.',
        'Apenas o número de animais de uma região.',
        'Apenas a variedade de plantas de uma floresta.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Biodiversidade representa a variedade de seres vivos, incluindo diversidade genética, de espécies e de ecossistemas.',
      feedbackIncorrect: 'Incorreto! Biodiversidade envolve a variedade de seres vivos, genes e ecossistemas.'
    },

    {
      question: 'Qual situação representa uma ação que pode contribuir para a conservação ambiental?',
      options: [
        'Despejar resíduos diretamente nos rios.',
        'Aumentar o desmatamento de áreas naturais.',
        'Desperdiçar água constantemente.',
        'Preservar habitats e reduzir a produção de resíduos.',
        'Retirar espécies de seus ambientes naturais sem controle.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A preservação de habitats e a redução de resíduos são medidas que podem contribuir para a conservação ambiental.',
      feedbackIncorrect: 'Incorreto! A preservação dos habitats e a redução de resíduos são ações relacionadas à conservação ambiental.'
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