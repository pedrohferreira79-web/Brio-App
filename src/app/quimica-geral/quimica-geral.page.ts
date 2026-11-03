import { Component } from '@angular/core';

@Component({
  selector: 'app-quimica-geral',
  templateUrl: './quimica-geral.page.html',
  styleUrls: ['./quimica-geral.page.scss'],
  standalone: false,
})
export class QuimicaGeralPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual é a menor unidade de um elemento químico que mantém suas propriedades?',
      options: [
        'Molécula',
        'Átomo',
        'Célula',
        'Íon',
        'Núcleo'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O átomo é a menor unidade de um elemento químico que mantém suas propriedades químicas.',
      feedbackIncorrect: 'Incorreto! O átomo é a unidade básica de um elemento químico.'
    },

    {
      question: 'Qual partícula possui carga elétrica negativa?',
      options: [
        'Próton',
        'Nêutron',
        'Elétron',
        'Núcleo',
        'Cátion'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O elétron possui carga elétrica negativa.',
      feedbackIncorrect: 'Incorreto! A partícula que possui carga elétrica negativa é o elétron.'
    },

    {
      question: 'O número atômico de um elemento corresponde ao número de:',
      options: [
        'Nêutrons do átomo.',
        'Elétrons e nêutrons juntos.',
        'Prótons presentes no núcleo.',
        'Moléculas presentes no elemento.',
        'Núcleos presentes no átomo.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O número atômico representa a quantidade de prótons existentes no núcleo do átomo.',
      feedbackIncorrect: 'Incorreto! O número atômico corresponde ao número de prótons presentes no núcleo.'
    },

    {
      question: 'Elementos que pertencem ao mesmo grupo da Tabela Periódica geralmente possuem:',
      options: [
        'O mesmo número de massa.',
        'Propriedades químicas semelhantes.',
        'A mesma quantidade de nêutrons.',
        'A mesma massa atômica.',
        'O mesmo número de períodos.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Elementos de um mesmo grupo apresentam propriedades químicas semelhantes devido à configuração de seus elétrons de valência.',
      feedbackIncorrect: 'Incorreto! Elementos do mesmo grupo da Tabela Periódica geralmente apresentam propriedades químicas semelhantes.'
    },

    {
      question: 'Qual dos elementos abaixo é classificado como um metal alcalino?',
      options: [
        'Cloro',
        'Oxigênio',
        'Sódio',
        'Neônio',
        'Enxofre'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O sódio (Na) pertence ao grupo 1 da Tabela Periódica, formado pelos metais alcalinos.',
      feedbackIncorrect: 'Incorreto! O sódio (Na) é um metal alcalino e pertence ao grupo 1 da Tabela Periódica.'
    },

    {
      question: 'O que caracteriza uma ligação iônica?',
      options: [
        'Compartilhamento de elétrons entre átomos.',
        'Transferência de elétrons entre átomos.',
        'Ausência total de elétrons.',
        'União apenas entre gases nobres.',
        'Compartilhamento de prótons.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Na ligação iônica ocorre transferência de elétrons, geralmente entre um metal e um ametal.',
      feedbackIncorrect: 'Incorreto! A ligação iônica é caracterizada principalmente pela transferência de elétrons entre os átomos.'
    },

    {
      question: 'Na ligação covalente, os átomos geralmente:',
      options: [
        'Transferem prótons.',
        'Perdem todos os seus elétrons.',
        'Compartilham elétrons.',
        'Transformam nêutrons em prótons.',
        'Deixam de possuir núcleo.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! As ligações covalentes são formadas pelo compartilhamento de pares de elétrons entre os átomos.',
      feedbackIncorrect: 'Incorreto! Na ligação covalente, os átomos compartilham elétrons.'
    },

    {
      question: 'Qual é a fórmula química da água?',
      options: [
        'CO₂',
        'O₂',
        'H₂O',
        'NaCl',
        'H₂'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A água é formada por dois átomos de hidrogênio e um átomo de oxigênio, sendo representada por H₂O.',
      feedbackIncorrect: 'Incorreto! A fórmula química da água é H₂O.'
    },

    {
      question: 'Qual das opções representa uma transformação química?',
      options: [
        'Derretimento do gelo.',
        'Evaporação da água.',
        'Queima da madeira.',
        'Quebra de um copo.',
        'Congelamento da água.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A queima da madeira produz novas substâncias, caracterizando uma transformação química.',
      feedbackIncorrect: 'Incorreto! A queima da madeira é uma transformação química porque produz novas substâncias.'
    },

    {
      question: 'Qual elemento possui o símbolo químico O?',
      options: [
        'Ouro',
        'Oxigênio',
        'Ósmio',
        'Ozônio',
        'Oganessônio'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O símbolo O representa o elemento químico oxigênio.',
      feedbackIncorrect: 'Incorreto! O símbolo químico O representa o oxigênio.'
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