import { Component } from '@angular/core';

@Component({
  selector: 'app-genetica',
  templateUrl: './genetica.page.html',
  styleUrls: ['./genetica.page.scss'],
  standalone: false,
})
export class GeneticaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual molécula contém as informações genéticas dos seres vivos?',
      options: [
        'ATP',
        'DNA',
        'Glicose',
        'Água',
        'Lipídio'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O DNA contém as informações genéticas que orientam diversas características e funções dos organismos.',
      feedbackIncorrect: 'Incorreto! A molécula que armazena as principais informações genéticas é o DNA.'
    },

    {
      question: 'Em genética, o que é um gene?',
      options: [
        'Uma célula responsável pela reprodução.',
        'Uma proteína encontrada no sangue.',
        'Uma unidade de informação genética presente no DNA.',
        'Um tipo de organela celular.',
        'Uma substância produzida pelas mitocôndrias.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Um gene é uma unidade de informação genética localizada no DNA.',
      feedbackIncorrect: 'Incorreto! Gene é uma unidade de informação genética presente no DNA.'
    },

    {
      question: 'Qual alternativa apresenta corretamente um exemplo de característica hereditária?',
      options: [
        'Uma cicatriz adquirida durante a vida.',
        'A cor natural dos olhos.',
        'Uma queimadura causada pelo sol.',
        'Um corte no braço.',
        'A roupa utilizada por uma pessoa.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A cor natural dos olhos é uma característica influenciada pela informação genética herdada.',
      feedbackIncorrect: 'Incorreto! A cor natural dos olhos é um exemplo de característica influenciada pela herança genética.'
    },

    {
      question: 'O que é um alelo?',
      options: [
        'Uma versão de um gene.',
        'Uma célula do sistema nervoso.',
        'Uma proteína produzida pelo ribossomo.',
        'Uma organela celular.',
        'Um tipo de cromossomo encontrado apenas em plantas.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Alelos são diferentes versões de um mesmo gene.',
      feedbackIncorrect: 'Incorreto! Alelo é uma das diferentes versões que um gene pode apresentar.'
    },

    {
      question: 'Quando um indivíduo possui dois alelos iguais para determinado gene, ele é considerado:',
      options: [
        'Heterozigoto',
        'Dominante',
        'Recessivo',
        'Homozigoto',
        'Mutante'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Um indivíduo homozigoto possui dois alelos iguais para determinado gene.',
      feedbackIncorrect: 'Incorreto! Quando os dois alelos são iguais, o indivíduo é chamado de homozigoto.'
    },

    {
      question: 'Quando um indivíduo possui dois alelos diferentes para determinado gene, ele é chamado de:',
      options: [
        'Homozigoto',
        'Heterozigoto',
        'Recessivo',
        'Clonado',
        'Haploide'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Heterozigoto é o indivíduo que possui dois alelos diferentes para determinado gene.',
      feedbackIncorrect: 'Incorreto! Indivíduos com dois alelos diferentes são chamados de heterozigotos.'
    },

    {
      question: 'Em um cruzamento entre dois indivíduos Aa, considerando A dominante sobre a, qual é a chance de nascer um indivíduo aa?',
      options: [
        '0%',
        '10%',
        '25%',
        '50%',
        '75%'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! No cruzamento Aa × Aa, a probabilidade de AA é 25%, Aa é 50% e aa é 25%.',
      feedbackIncorrect: 'Incorreto! No cruzamento Aa × Aa, a chance de obter aa é de 25%.'
    },

    {
      question: 'Qual é a função dos cromossomos?',
      options: [
        'Produzir diretamente toda a energia da célula.',
        'Transportar oxigênio pelo organismo.',
        'Organizar e carregar o material genético.',
        'Realizar a digestão dos alimentos.',
        'Produzir água para a célula.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Os cromossomos são estruturas que organizam e carregam o material genético.',
      feedbackIncorrect: 'Incorreto! Os cromossomos organizam e carregam o material genético das células.'
    },

    {
      question: 'O que é uma mutação genética?',
      options: [
        'Uma alteração no material genético.',
        'A produção normal de energia celular.',
        'A divisão de uma célula em duas.',
        'A entrada de água na célula.',
        'A formação de uma proteína específica.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Uma mutação é uma alteração na sequência do material genético.',
      feedbackIncorrect: 'Incorreto! Mutação genética é uma alteração que ocorre no material genético.'
    },

    {
      question: 'Qual processo produz células reprodutivas, como óvulos e espermatozoides, em organismos que realizam reprodução sexuada?',
      options: [
        'Mitose',
        'Respiração celular',
        'Fotossíntese',
        'Meiose',
        'Difusão'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A meiose produz células com metade do número de cromossomos, como os gametas.',
      feedbackIncorrect: 'Incorreto! O processo responsável pela formação dos gametas é a meiose.'
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