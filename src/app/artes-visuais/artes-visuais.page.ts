import { Component } from '@angular/core';

@Component({
  selector: 'app-artes-visuais',
  templateUrl: './artes-visuais.page.html',
  styleUrls: ['./artes-visuais.page.scss'],
  standalone: false,
})
export class ArtesVisuaisPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual é a principal característica do movimento artístico Impressionista?',
      options: [
        'Representar cenas exclusivamente religiosas.',
        'Valorizar a impressão visual, a luz e as cores em diferentes momentos.',
        'Utilizar apenas formas geométricas.',
        'Retratar somente figuras mitológicas.',
        'Eliminar completamente o uso das cores.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O Impressionismo valorizava a percepção visual, principalmente os efeitos da luz e das cores sobre os objetos e paisagens.',
      feedbackIncorrect: 'Incorreto! O Impressionismo buscava representar as impressões visuais, destacando a luz, as cores e os efeitos da natureza.'
    },

    {
      question: 'Qual artista ficou conhecido pela obra Mona Lisa?',
      options: [
        'Vincent van Gogh.',
        'Pablo Picasso.',
        'Michelangelo.',
        'Leonardo da Vinci.',
        'Claude Monet.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Leonardo da Vinci foi o artista responsável pela pintura Mona Lisa, uma das obras mais conhecidas do Renascimento.',
      feedbackIncorrect: 'Incorreto! Mona Lisa foi pintada por Leonardo da Vinci durante o período do Renascimento.'
    },

    {
      question: 'O que caracteriza principalmente o Cubismo?',
      options: [
        'A representação da realidade com extrema fidelidade.',
        'O uso exclusivo de cores claras e suaves.',
        'A representação de objetos por meio de formas geométricas e diferentes perspectivas.',
        'A valorização exclusiva de paisagens naturais.',
        'A ausência de formas e estruturas nas pinturas.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O Cubismo apresentava objetos e figuras por meio de formas geométricas e diferentes pontos de vista.',
      feedbackIncorrect: 'Incorreto! O Cubismo fragmentava as formas e apresentava diferentes perspectivas em uma mesma composição.'
    },

    {
      question: 'Qual é a principal função da perspectiva em um desenho?',
      options: [
        'Criar a sensação de profundidade e distância em uma superfície plana.',
        'Aumentar a quantidade de cores utilizadas.',
        'Eliminar as proporções dos objetos.',
        'Substituir os contornos por texturas.',
        'Representar somente figuras humanas.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A perspectiva permite criar a ilusão de profundidade, fazendo com que os elementos pareçam estar em diferentes distâncias.',
      feedbackIncorrect: 'Incorreto! A perspectiva é uma técnica utilizada para representar profundidade e distância em uma superfície bidimensional.'
    },

    {
      question: 'Qual material é tradicionalmente utilizado na produção de esculturas?',
      options: [
        'Somente papel e lápis.',
        'Apenas tecidos e fotografias.',
        'Somente tintas e pincéis.',
        'Mármore, madeira, argila e metal.',
        'Exclusivamente materiais digitais.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Mármore, madeira, argila e metal são materiais tradicionalmente utilizados na produção de esculturas.',
      feedbackIncorrect: 'Incorreto! Esculturas podem ser produzidas com diversos materiais, como mármore, madeira, argila e metal.'
    },

    {
      question: 'O que caracteriza a arte abstrata?',
      options: [
        'A representação obrigatória de paisagens reais.',
        'A utilização de formas, cores e linhas sem a necessidade de representar objetos reconhecíveis.',
        'A reprodução exata de fotografias.',
        'A utilização exclusiva de imagens religiosas.',
        'A representação apenas de acontecimentos históricos.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A arte abstrata explora formas, cores e linhas, sem depender da representação fiel de elementos da realidade.',
      feedbackIncorrect: 'Incorreto! A arte abstrata não precisa representar objetos reconhecíveis, valorizando formas, cores e composições.'
    },

    {
      question: 'Qual foi uma das principais contribuições da fotografia para as artes visuais?',
      options: [
        'Impedir a criação de pinturas e desenhos.',
        'Eliminar a necessidade de observar a realidade.',
        'Permitir registrar imagens e ampliar as possibilidades de expressão artística.',
        'Substituir todas as formas tradicionais de arte.',
        'Limitar a produção de imagens aos ambientes internos.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A fotografia ampliou as possibilidades de registrar, interpretar e produzir imagens, tornando-se também uma importante forma de expressão artística.',
      feedbackIncorrect: 'Incorreto! A fotografia trouxe novas possibilidades de registro visual e expressão artística, sem eliminar outras formas de arte.'
    },

    {
      question: 'O que caracteriza o Surrealismo?',
      options: [
        'A representação exclusiva de acontecimentos científicos.',
        'A reprodução fiel de paisagens urbanas.',
        'O uso obrigatório de formas geométricas.',
        'A valorização do inconsciente, dos sonhos e de imagens imaginárias.',
        'A representação somente de objetos do cotidiano.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! O Surrealismo explorava sonhos, imaginação e elementos do inconsciente, criando imagens que muitas vezes desafiavam a lógica.',
      feedbackIncorrect: 'Incorreto! O Surrealismo valorizava o mundo dos sonhos, da imaginação e do inconsciente.'
    },

    {
      question: 'Qual é uma característica importante da arte contemporânea?',
      options: [
        'A utilização obrigatória apenas de pinturas a óleo.',
        'A liberdade de experimentar diferentes materiais, linguagens e tecnologias.',
        'A proibição de manifestações artísticas nas ruas.',
        'A reprodução exclusiva de obras antigas.',
        'A utilização de apenas uma técnica artística.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A arte contemporânea permite experimentar diferentes linguagens, materiais, tecnologias e formas de expressão.',
      feedbackIncorrect: 'Incorreto! A arte contemporânea apresenta grande diversidade de técnicas, materiais e linguagens artísticas.'
    },

    {
      question: 'O que é patrimônio cultural material relacionado às artes visuais?',
      options: [
        'Somente músicas e danças tradicionais.',
        'Ideias e sentimentos transmitidos oralmente.',
        'Apenas costumes e tradições populares.',
        'Somente conhecimentos científicos.',
        'Bens físicos, como pinturas, esculturas, monumentos e construções históricas.'
      ],
      answer: 4,
      feedbackCorrect: 'Correto! O patrimônio cultural material inclui bens físicos, como obras de arte, monumentos, esculturas e construções de importância histórica.',
      feedbackIncorrect: 'Incorreto! O patrimônio cultural material é formado por bens físicos, como pinturas, esculturas, monumentos e construções históricas.'
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
