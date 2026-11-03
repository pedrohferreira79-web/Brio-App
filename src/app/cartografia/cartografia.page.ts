import { Component } from '@angular/core';

@Component({
  selector: 'app-cartografia',
  templateUrl: './cartografia.page.html',
  styleUrls: ['./cartografia.page.scss'],
  standalone: false,
})
export class CartografiaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é Cartografia?',
      options: [
        'O estudo exclusivo dos oceanos.',
        'A ciência que representa e estuda o espaço geográfico por meio de mapas e outras representações.',
        'O estudo somente do clima.',
        'A análise apenas das fronteiras políticas.',
        'O estudo exclusivo das populações.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Cartografia é responsável pela representação do espaço geográfico por meio de mapas, cartas, plantas e outras formas de representação.',
      feedbackIncorrect: 'Incorreto! A Cartografia trabalha com a representação do espaço geográfico por meio de mapas e outras representações.'
    },

    {
      question: 'Qual é a principal função de uma escala cartográfica?',
      options: [
        'Indicar a direção do norte.',
        'Mostrar os tipos de vegetação.',
        'Relacionar as distâncias representadas no mapa com as distâncias reais.',
        'Identificar os países de um continente.',
        'Mostrar exclusivamente as altitudes.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A escala mostra a relação entre uma distância no mapa e a distância correspondente na realidade.',
      feedbackIncorrect: 'Incorreto! A escala estabelece a relação entre as distâncias representadas no mapa e as distâncias reais.'
    },

    {
      question: 'Em um mapa, qual elemento geralmente indica os significados dos símbolos utilizados?',
      options: [
        'Título',
        'Legenda',
        'Escala',
        'Coordenadas',
        'Orientação'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A legenda explica o significado dos símbolos e cores utilizados no mapa.',
      feedbackIncorrect: 'Incorreto! A legenda é o elemento responsável por explicar os símbolos e cores presentes no mapa.'
    },

    {
      question: 'Qual é a função das coordenadas geográficas?',
      options: [
        'Determinar a população de uma região.',
        'Localizar pontos na superfície terrestre.',
        'Indicar apenas a altitude dos lugares.',
        'Representar exclusivamente os rios.',
        'Mostrar a divisão econômica dos países.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! As coordenadas geográficas permitem localizar pontos na superfície terrestre por meio de latitude e longitude.',
      feedbackIncorrect: 'Incorreto! As coordenadas geográficas são utilizadas principalmente para localizar pontos na superfície terrestre.'
    },

    {
      question: 'A latitude é medida a partir de qual linha de referência?',
      options: [
        'Meridiano de Greenwich',
        'Linha Internacional de Data',
        'Linha do Equador',
        'Trópico de Capricórnio',
        'Círculo Polar Ártico'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A latitude é medida em relação à Linha do Equador, variando de 0° a 90° para norte ou sul.',
      feedbackIncorrect: 'Incorreto! A latitude é calculada a partir da Linha do Equador.'
    },

    {
      question: 'O que são meridianos?',
      options: [
        'Linhas imaginárias paralelas ao Equador.',
        'Linhas imaginárias que ligam os polos e ajudam a determinar a longitude.',
        'Linhas utilizadas somente para indicar altitude.',
        'Divisões políticas entre países.',
        'Linhas que representam os oceanos.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Os meridianos são linhas imaginárias que ligam os polos e são utilizados para determinar a longitude.',
      feedbackIncorrect: 'Incorreto! Meridianos são linhas imaginárias que ligam o Polo Norte ao Polo Sul e ajudam na determinação da longitude.'
    },

    {
      question: 'O que acontece com o nível de detalhamento quando utilizamos uma escala grande?',
      options: [
        'O mapa apresenta menos detalhes obrigatoriamente.',
        'O mapa pode representar uma área menor com maior nível de detalhamento.',
        'O mapa deixa de representar distâncias.',
        'O mapa passa a representar somente continentes.',
        'A escala deixa de existir.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Escalas grandes permitem representar áreas menores com maior nível de detalhamento.',
      feedbackIncorrect: 'Incorreto! Em uma escala grande, áreas menores podem ser representadas com maior detalhamento.'
    },

    {
      question: 'Qual tipo de mapa representa informações relacionadas ao relevo e às altitudes?',
      options: [
        'Mapa político',
        'Mapa demográfico',
        'Mapa físico',
        'Mapa econômico',
        'Mapa eleitoral'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Mapas físicos representam elementos naturais, como relevo, rios e outras características físicas do território.',
      feedbackIncorrect: 'Incorreto! O mapa físico representa características naturais do território, incluindo o relevo.'
    },

    {
      question: 'O que são projeções cartográficas?',
      options: [
        'Técnicas utilizadas para representar a superfície curva da Terra em uma superfície plana.',
        'Métodos usados apenas para medir a população.',
        'Sistemas que mostram somente as fronteiras políticas.',
        'Técnicas utilizadas exclusivamente para calcular temperaturas.',
        'Formas de representar apenas os oceanos.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! As projeções cartográficas permitem representar a superfície terrestre, que é curva, em mapas planos.',
      feedbackIncorrect: 'Incorreto! Projeções cartográficas são métodos utilizados para representar a superfície curva da Terra em uma superfície plana.'
    },

    {
      question: 'Qual instrumento é utilizado para indicar as direções em um mapa?',
      options: [
        'Legenda',
        'Escala',
        'Rosa dos ventos',
        'Título',
        'Gráfico'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A rosa dos ventos indica as principais direções, como norte, sul, leste e oeste.',
      feedbackIncorrect: 'Incorreto! A rosa dos ventos é utilizada para indicar as direções no mapa.'
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
