import { Component } from '@angular/core';

@Component({
  selector: 'app-geografia-fisica',
  templateUrl: './geografia-fisica.page.html',
  styleUrls: ['./geografia-fisica.page.scss'],
  standalone: false,
})
export class GeografiaFisicaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é relevo?',
      options: [
        'A quantidade de chuva de uma região.',
        'O conjunto das formas da superfície terrestre.',
        'A quantidade de vegetação de uma região.',
        'A composição química dos rios.',
        'A movimentação das massas de ar.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Relevo é o conjunto das diferentes formas presentes na superfície terrestre.',
      feedbackIncorrect: 'Incorreto! Relevo corresponde ao conjunto de formas da superfície terrestre, como montanhas, planaltos e planícies.'
    },

    {
      question: 'Qual característica é típica de uma planície?',
      options: [
        'Predomínio de áreas muito elevadas.',
        'Superfícies geralmente mais planas e de menor altitude.',
        'Presença obrigatória de vulcões ativos.',
        'Grandes profundidades abaixo do nível do mar.',
        'Ausência completa de rios.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! As planícies são áreas geralmente mais planas, onde predominam processos de sedimentação.',
      feedbackIncorrect: 'Incorreto! As planícies são áreas predominantemente planas e geralmente associadas à deposição de sedimentos.'
    },

    {
      question: 'Qual fator influencia diretamente a temperatura de uma determinada região?',
      options: [
        'Latitude',
        'Idioma',
        'Densidade populacional',
        'Tipo de moeda',
        'Atividade industrial apenas'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A latitude influencia a quantidade de radiação solar recebida por uma região.',
      feedbackIncorrect: 'Incorreto! A latitude é um dos fatores que influenciam diretamente a temperatura de uma região.'
    },

    {
      question: 'O que caracteriza o clima de uma região?',
      options: [
        'Apenas a temperatura registrada em um dia.',
        'As condições atmosféricas observadas durante um longo período.',
        'Somente a quantidade de chuva de uma semana.',
        'Apenas a velocidade do vento durante uma tempestade.',
        'A quantidade de rios existentes na região.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O clima representa o comportamento médio das condições atmosféricas observado durante longos períodos.',
      feedbackIncorrect: 'Incorreto! Clima está relacionado ao comportamento médio da atmosfera durante longos períodos, e não apenas às condições de um dia.'
    },

    {
      question: 'Qual formação vegetal é característica de regiões com clima muito seco?',
      options: [
        'Floresta tropical densa.',
        'Vegetação adaptada à escassez de água.',
        'Floresta equatorial sempre úmida.',
        'Manguezal.',
        'Vegetação exclusivamente aquática.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Regiões secas possuem vegetações adaptadas à pouca disponibilidade de água.',
      feedbackIncorrect: 'Incorreto! Em regiões secas, predominam espécies adaptadas à escassez de água.'
    },

    {
      question: 'O que é uma bacia hidrográfica?',
      options: [
        'Uma área formada exclusivamente por lagos.',
        'Uma região drenada por um rio principal e seus afluentes.',
        'Um conjunto de montanhas sem rios.',
        'Uma área ocupada apenas por oceanos.',
        'Uma região que não possui circulação de água.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Uma bacia hidrográfica é uma área drenada por um rio principal e seus afluentes.',
      feedbackIncorrect: 'Incorreto! Bacia hidrográfica é a área drenada por um rio principal e sua rede de afluentes.'
    },

    {
      question: 'Qual processo contribui para o desgaste e a transformação do relevo?',
      options: [
        'Erosão',
        'Fotossíntese',
        'Respiração',
        'Evaporação exclusivamente',
        'Transpiração vegetal'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A erosão provoca o desgaste e o transporte de partículas do solo e das rochas.',
      feedbackIncorrect: 'Incorreto! A erosão é um dos principais processos responsáveis pelo desgaste e transporte de materiais do relevo.'
    },

    {
      question: 'Qual é a principal diferença entre tempo atmosférico e clima?',
      options: [
        'Tempo e clima significam exatamente a mesma coisa.',
        'O tempo refere-se às condições atmosféricas momentâneas, enquanto o clima envolve padrões de longo prazo.',
        'O clima muda a cada hora e o tempo permanece durante décadas.',
        'O tempo existe apenas em regiões tropicais.',
        'O clima está relacionado somente à vegetação.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Tempo atmosférico representa as condições atuais ou de curto prazo, enquanto clima considera padrões observados durante longos períodos.',
      feedbackIncorrect: 'Incorreto! Tempo corresponde às condições atmosféricas de curto prazo; clima corresponde aos padrões atmosféricos de longo prazo.'
    },

    {
      question: 'Qual alternativa apresenta apenas elementos naturais da paisagem?',
      options: [
        'Prédios, estradas e rios.',
        'Pontes, plantações e montanhas.',
        'Rios, montanhas e vegetação.',
        'Rodovias, casas e florestas.',
        'Fábricas, rios e ruas.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Rios, montanhas e vegetação são elementos naturais da paisagem.',
      feedbackIncorrect: 'Incorreto! Rios, montanhas e vegetação são exemplos de elementos naturais.'
    },

    {
      question: 'Qual fenômeno está relacionado ao movimento das placas tectônicas?',
      options: [
        'Formação de terremotos.',
        'Formação das nuvens diariamente.',
        'Evaporação da água.',
        'Fotossíntese.',
        'Formação das marés exclusivamente pela chuva.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O movimento das placas tectônicas está relacionado à ocorrência de terremotos e outros fenômenos geológicos.',
      feedbackIncorrect: 'Incorreto! O movimento das placas tectônicas pode provocar terremotos, vulcanismo e formação de grandes estruturas do relevo.'
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