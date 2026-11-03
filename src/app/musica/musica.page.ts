import { Component } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
  standalone: false,
})
export class MusicaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é ritmo na música?',
      options: [
        'A combinação de cores utilizadas em uma apresentação.',
        'A organização dos sons e silêncios ao longo do tempo.',
        'A intensidade máxima de um instrumento.',
        'A quantidade de instrumentos em uma banda.',
        'A velocidade com que uma música é gravada.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O ritmo organiza os sons e os silêncios ao longo do tempo, criando padrões musicais.',
      feedbackIncorrect: 'Incorreto! O ritmo é a organização dos sons e silêncios ao longo do tempo, sendo um dos elementos fundamentais da música.'
    },

    {
      question: 'Qual instrumento musical pertence à família dos instrumentos de cordas?',
      options: [
        'Flauta transversal.',
        'Trompete.',
        'Violino.',
        'Clarinete.',
        'Trombone.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O violino é um instrumento de cordas, geralmente tocado com o auxílio de um arco.',
      feedbackIncorrect: 'Incorreto! O violino pertence à família das cordas, assim como o violão, a viola e o violoncelo.'
    },

    {
      question: 'Qual é a principal característica do gênero musical jazz?',
      options: [
        'A ausência completa de improvisação.',
        'A utilização exclusiva de instrumentos eletrônicos.',
        'A improvisação e a liberdade de interpretação musical.',
        'A reprodução obrigatória de músicas clássicas.',
        'A utilização apenas de instrumentos de percussão.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O jazz é conhecido pela improvisação, pela liberdade de interpretação e pela interação entre os músicos.',
      feedbackIncorrect: 'Incorreto! A improvisação é uma das características mais marcantes do jazz.'
    },

    {
      question: 'Quantas notas naturais existem na escala musical tradicional?',
      options: [
        'Cinco.',
        'Seis.',
        'Sete.',
        'Oito.',
        'Dez.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A escala musical natural possui sete notas: Dó, Ré, Mi, Fá, Sol, Lá e Si.',
      feedbackIncorrect: 'Incorreto! A escala musical natural é formada por sete notas: Dó, Ré, Mi, Fá, Sol, Lá e Si.'
    },

    {
      question: 'Qual compositor é conhecido por obras como a Nona Sinfonia e pela composição Ode à Alegria?',
      options: [
        'Wolfgang Amadeus Mozart.',
        'Johann Sebastian Bach.',
        'Frédéric Chopin.',
        'Ludwig van Beethoven.',
        'Antonio Vivaldi.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Ludwig van Beethoven compôs a Nona Sinfonia, que apresenta o famoso trecho conhecido como Ode à Alegria.',
      feedbackIncorrect: 'Incorreto! Beethoven foi o compositor responsável pela Nona Sinfonia e pela famosa Ode à Alegria.'
    },

    {
      question: 'O que significa a indicação de andamento musical chamada Allegro?',
      options: [
        'Execução muito lenta e tranquila.',
        'Execução rápida e animada.',
        'Execução sem ritmo definido.',
        'Execução com volume muito baixo.',
        'Execução exclusivamente instrumental.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Allegro é uma indicação musical que representa um andamento rápido e geralmente animado.',
      feedbackIncorrect: 'Incorreto! Allegro indica que a música deve ser executada em andamento rápido e animado.'
    },

    {
      question: 'Qual instrumento pertence à família dos metais?',
      options: [
        'Violoncelo.',
        'Oboé.',
        'Fagote.',
        'Trompete.',
        'Harpa.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! O trompete é um instrumento de sopro da família dos metais, assim como o trombone e a tuba.',
      feedbackIncorrect: 'Incorreto! O trompete pertence à família dos metais e produz som por meio da vibração dos lábios do músico.'
    },

    {
      question: 'Qual foi uma importante característica do movimento musical conhecido como Bossa Nova?',
      options: [
        'A mistura de elementos do samba com influências do jazz e uma sonoridade mais suave.',
        'A utilização exclusiva de instrumentos eletrônicos.',
        'A ausência de instrumentos de cordas.',
        'A reprodução de músicas medievais.',
        'A substituição completa do samba por música clássica.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A Bossa Nova surgiu no Brasil no final da década de 1950, combinando elementos do samba com influências do jazz e uma interpretação mais suave.',
      feedbackIncorrect: 'Incorreto! A Bossa Nova é um movimento musical brasileiro que combina elementos do samba com influências do jazz.'
    },

    {
      question: 'Na teoria musical, o que representa uma pausa?',
      options: [
        'Um som executado com volume elevado.',
        'Uma mudança obrigatória de instrumento.',
        'Um momento de silêncio com duração determinada.',
        'A repetição de uma nota musical.',
        'O aumento da velocidade da música.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A pausa representa um período de silêncio na música, possuindo uma duração específica.',
      feedbackIncorrect: 'Incorreto! As pausas são símbolos musicais que indicam momentos de silêncio durante a execução.'
    },

    {
      question: 'Qual foi a importância da invenção da gravação sonora para a história da música?',
      options: [
        'Impedir a circulação de músicas entre países.',
        'Permitir registrar, reproduzir e preservar interpretações musicais.',
        'Eliminar a necessidade de instrumentos musicais.',
        'Substituir completamente as apresentações ao vivo.',
        'Limitar a música à transmissão por rádio.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A gravação sonora permitiu registrar apresentações, reproduzir músicas e preservar interpretações para as gerações futuras.',
      feedbackIncorrect: 'Incorreto! A gravação sonora transformou a história da música ao possibilitar o registro e a reprodução de interpretações musicais.'
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
