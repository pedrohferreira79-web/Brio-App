import { Component } from '@angular/core';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.page.html',
  styleUrls: ['./teatro.page.scss'],
  standalone: false,
})
export class TeatroPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é dramaturgia no contexto teatral?',
      options: [
        'A criação de figurinos e cenários para apresentações.',
        'A arte de escrever e estruturar textos destinados à representação teatral.',
        'A técnica utilizada exclusivamente para iluminar o palco.',
        'A organização dos espectadores dentro do teatro.',
        'A produção de músicas para apresentações.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A dramaturgia envolve a criação e a organização de textos teatrais, incluindo diálogos, conflitos, personagens e acontecimentos.',
      feedbackIncorrect: 'Incorreto! A dramaturgia é a arte de criar e estruturar textos destinados à representação teatral.'
    },

    {
      question: 'Qual é a principal função do diretor teatral?',
      options: [
        'Controlar exclusivamente a venda dos ingressos.',
        'Escrever obrigatoriamente todos os diálogos da peça.',
        'Coordenar e orientar os elementos artísticos da encenação.',
        'Substituir todos os atores durante a apresentação.',
        'Construir pessoalmente todos os cenários.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O diretor coordena a montagem da peça e orienta os atores e demais profissionais para construir a apresentação.',
      feedbackIncorrect: 'Incorreto! O diretor teatral é responsável por orientar a interpretação e coordenar os diferentes elementos da encenação.'
    },

    {
      question: 'Qual é a principal característica da tragédia no teatro clássico?',
      options: [
        'Apresentar exclusivamente situações engraçadas.',
        'Retratar conflitos humanos profundos, frequentemente envolvendo sofrimento e destino.',
        'Utilizar somente personagens animais.',
        'Evitar conflitos entre os personagens.',
        'Apresentar apenas histórias sem acontecimentos importantes.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A tragédia clássica apresenta conflitos profundos, geralmente envolvendo sofrimento, escolhas difíceis e consequências marcantes.',
      feedbackIncorrect: 'Incorreto! A tragédia é um gênero teatral que explora conflitos humanos profundos e situações dramáticas.'
    },

    {
      question: 'O que caracteriza principalmente a comédia teatral?',
      options: [
        'A apresentação de acontecimentos exclusivamente históricos.',
        'A ausência de diálogos entre personagens.',
        'A utilização obrigatória de música clássica.',
        'O uso do humor para provocar diversão e, muitas vezes, críticas sociais.',
        'A representação exclusiva de acontecimentos trágicos.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A comédia utiliza situações engraçadas, diálogos e personagens para divertir o público, podendo também apresentar críticas sociais.',
      feedbackIncorrect: 'Incorreto! A comédia utiliza o humor e situações cômicas para divertir e, em muitos casos, provocar reflexões.'
    },

    {
      question: 'Qual é a função da cenografia em uma apresentação teatral?',
      options: [
        'Criar e organizar os elementos visuais do espaço cênico.',
        'Definir exclusivamente os movimentos dos atores.',
        'Controlar o volume das vozes dos personagens.',
        'Escrever os textos e diálogos da peça.',
        'Escolher a quantidade de espectadores.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A cenografia organiza os elementos visuais do espaço cênico, ajudando a representar os ambientes onde a história acontece.',
      feedbackIncorrect: 'Incorreto! A cenografia é responsável pela criação dos cenários e pela organização visual do espaço da apresentação.'
    },

    {
      question: 'O que significa improvisação teatral?',
      options: [
        'Repetir exatamente uma apresentação gravada.',
        'Atuar sem utilizar expressões corporais.',
        'Criar cenas e diálogos espontaneamente, sem depender totalmente de um roteiro previamente definido.',
        'Apresentar uma peça sem a presença de personagens.',
        'Utilizar somente falas decoradas de outros espetáculos.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A improvisação acontece quando os atores criam ações, diálogos e situações espontaneamente durante a atividade teatral.',
      feedbackIncorrect: 'Incorreto! A improvisação é uma prática em que os atores desenvolvem cenas e diálogos de maneira espontânea.'
    },

    {
      question: 'Qual foi a importância do teatro na Grécia Antiga?',
      options: [
        'Era utilizado somente para ensinar atividades agrícolas.',
        'Possuía relação com celebrações religiosas, manifestações culturais e reflexões sobre a sociedade.',
        'Era proibido para a população participar de apresentações.',
        'Servia exclusivamente para treinamentos militares.',
        'Era realizado apenas dentro dos palácios dos imperadores romanos.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O teatro grego estava ligado às celebrações religiosas, especialmente em homenagem a Dionísio, e também apresentava questões humanas e sociais.',
      feedbackIncorrect: 'Incorreto! Na Grécia Antiga, o teatro tinha importância religiosa, cultural e social, sendo parte significativa da vida pública.'
    },

    {
      question: 'Qual é a função da iluminação em uma encenação teatral?',
      options: [
        'Substituir completamente os cenários.',
        'Impedir que o público visualize os atores.',
        'Definir os diálogos dos personagens.',
        'Destacar espaços e personagens, além de criar atmosferas e sensações.',
        'Determinar obrigatoriamente o gênero da peça.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A iluminação ajuda a destacar elementos do palco e contribui para criar diferentes ambientes, emoções e sensações.',
      feedbackIncorrect: 'Incorreto! A iluminação é um recurso artístico que destaca elementos da cena e ajuda a construir a atmosfera da apresentação.'
    },

    {
      question: 'O que é um monólogo no teatro?',
      options: [
        'Uma cena em que vários personagens falam ao mesmo tempo.',
        'Uma apresentação sem nenhum tipo de fala.',
        'Um diálogo entre dois personagens.',
        'Uma sequência de movimentos realizada por todo o elenco.',
        'Uma fala ou discurso desenvolvido por um único personagem.'
      ],
      answer: 4,
      feedbackCorrect: 'Correto! O monólogo é uma fala desenvolvida por um único personagem, que pode expressar pensamentos, sentimentos ou reflexões.',
      feedbackIncorrect: 'Incorreto! O monólogo é uma forma de expressão teatral em que um personagem apresenta uma fala ou discurso individual.'
    },

    {
      question: 'O que caracteriza o teatro de rua?',
      options: [
        'Apresentações realizadas exclusivamente em grandes teatros fechados.',
        'Espetáculos apresentados em espaços públicos, aproximando a arte teatral da população.',
        'Peças que não utilizam atores ou personagens.',
        'Apresentações destinadas somente a convidados.',
        'Espetáculos que utilizam obrigatoriamente cenários digitais.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O teatro de rua acontece em espaços públicos, como praças e ruas, permitindo maior aproximação entre os artistas e a comunidade.',
      feedbackIncorrect: 'Incorreto! O teatro de rua utiliza espaços públicos como locais de apresentação, levando a experiência teatral diretamente à população.'
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
