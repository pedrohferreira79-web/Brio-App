import { Component } from '@angular/core';

@Component({
  selector: 'app-literatura',
  templateUrl: './literatura.page.html',
  styleUrls: ['./literatura.page.scss'],
  standalone: false,
})
export class LiteraturaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual característica está relacionada ao Romantismo brasileiro?',
      options: [
        'Valorização exclusiva da razão e da lógica.',
        'Idealização do amor e valorização dos sentimentos.',
        'Busca por representar a realidade de forma totalmente objetiva.',
        'Uso predominante de temas científicos.',
        'Rejeição completa da natureza.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O Romantismo valoriza os sentimentos, a subjetividade e frequentemente apresenta a idealização amorosa.',
      feedbackIncorrect: 'Incorreto! O Romantismo é marcado pela valorização dos sentimentos, da subjetividade e da idealização.'
    },

    {
      question: 'Qual obra é considerada um importante marco do Modernismo brasileiro?',
      options: [
        'Iracema',
        'O Cortiço',
        'Macunaíma',
        'Dom Casmurro',
        'Os Lusíadas'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! "Macunaíma", de Mário de Andrade, é uma das principais obras do Modernismo brasileiro.',
      feedbackIncorrect: 'Incorreto! A resposta correta é "Macunaíma", de Mário de Andrade.'
    },

    {
      question: 'Qual característica é frequentemente associada ao Realismo?',
      options: [
        'Idealização exagerada dos personagens.',
        'Valorização exclusiva da fantasia.',
        'Representação mais crítica e objetiva da sociedade.',
        'Exaltação dos sentimentos amorosos.',
        'Uso obrigatório de personagens mitológicos.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O Realismo procura apresentar uma visão mais crítica e objetiva da sociedade e do comportamento humano.',
      feedbackIncorrect: 'Incorreto! O Realismo apresenta uma abordagem mais crítica e objetiva da realidade.'
    },

    {
      question: 'Quem escreveu "Dom Casmurro"?',
      options: [
        'José de Alencar',
        'Machado de Assis',
        'Carlos Drummond de Andrade',
        'Mário de Andrade',
        'Graciliano Ramos'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! "Dom Casmurro" foi escrito por Machado de Assis.',
      feedbackIncorrect: 'Incorreto! O autor de "Dom Casmurro" é Machado de Assis.'
    },

    {
      question: 'Qual movimento literário brasileiro ficou conhecido por valorizar a linguagem cotidiana e romper com padrões tradicionais?',
      options: [
        'Modernismo',
        'Arcadismo',
        'Barroco',
        'Trovadorismo',
        'Classicismo'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O Modernismo buscou renovar a literatura e romper com padrões tradicionais.',
      feedbackIncorrect: 'Incorreto! O movimento que promoveu essa ruptura foi o Modernismo.'
    },

    {
      question: 'No Arcadismo, qual tema era frequentemente valorizado?',
      options: [
        'A vida simples e próxima da natureza.',
        'A industrialização das grandes cidades.',
        'Os conflitos psicológicos modernos.',
        'A tecnologia e a ciência.',
        'A vida urbana e seus problemas.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O Arcadismo valorizava a simplicidade, a natureza e uma vida idealizada no campo.',
      feedbackIncorrect: 'Incorreto! O Arcadismo valorizava a vida simples, a natureza e o ambiente rural.'
    },

    {
      question: 'Qual alternativa apresenta corretamente uma característica do Barroco?',
      options: [
        'Equilíbrio absoluto entre razão e emoção.',
        'Linguagem sempre simples e direta.',
        'Conflito entre ideias religiosas e desejos humanos.',
        'Rejeição de temas religiosos.',
        'Ausência de contrastes.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O Barroco apresenta frequentemente conflitos e contrastes, como razão e emoção ou pecado e perdão.',
      feedbackIncorrect: 'Incorreto! O Barroco é marcado por conflitos, contrastes e dualidades.'
    },

    {
      question: 'Qual autor é conhecido por representar uma importante fase do Pré-Modernismo brasileiro?',
      options: [
        'Euclides da Cunha',
        'Camões',
        'José de Alencar',
        'Gregório de Matos',
        'Olavo Bilac'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Euclides da Cunha é um dos principais autores associados ao Pré-Modernismo.',
      feedbackIncorrect: 'Incorreto! Euclides da Cunha é um importante representante do Pré-Modernismo brasileiro.'
    },

    {
      question: 'Qual é uma característica marcante da primeira fase do Modernismo brasileiro?',
      options: [
        'Retorno obrigatório aos modelos clássicos.',
        'Experimentação e ruptura com padrões tradicionais.',
        'Valorização exclusiva da linguagem formal.',
        'Rejeição de temas brasileiros.',
        'Imitação direta da literatura medieval.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A primeira fase modernista foi marcada pela experimentação, inovação e ruptura com padrões tradicionais.',
      feedbackIncorrect: 'Incorreto! A primeira fase do Modernismo buscou romper com padrões tradicionais e experimentar novas formas de expressão.'
    },

    {
      question: 'O que é uma escola literária?',
      options: [
        'Uma instituição onde escritores estudam literatura.',
        'Um conjunto de obras publicadas no mesmo ano.',
        'Um período ou movimento que reúne características literárias semelhantes.',
        'Uma lista de autores famosos.',
        'Um gênero específico de poesia.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Uma escola literária reúne autores e obras que apresentam características semelhantes em determinado período.',
      feedbackIncorrect: 'Incorreto! Escola literária é um movimento ou período que reúne características semelhantes na literatura.'
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
