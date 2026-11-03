import { Component } from '@angular/core';

@Component({
  selector: 'app-etica',
  templateUrl: './etica.page.html',
  styleUrls: ['./etica.page.scss'],
  standalone: false,
})
export class EticaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que podemos entender por ética?',
      options: [
        'O estudo das regras de matemática.',
        'A reflexão sobre valores, princípios e comportamentos humanos.',
        'Um conjunto de leis de trânsito.',
        'A obrigação de pensar da mesma maneira que outras pessoas.',
        'Uma forma de evitar qualquer tipo de opinião.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A ética envolve a reflexão sobre valores, princípios e comportamentos que orientam as ações humanas.',
      feedbackIncorrect: 'Incorreto! A ética está relacionada à reflexão sobre valores, princípios e comportamentos humanos.'
    },

    {
      question: 'Qual situação representa uma atitude ética?',
      options: [
        'Esconder um erro para evitar consequências.',
        'Copiar o trabalho de outra pessoa.',
        'Assumir um erro e procurar corrigi-lo.',
        'Mentir para conseguir uma vantagem.',
        'Ignorar alguém que precisa de ajuda.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Reconhecer um erro e procurar corrigi-lo demonstra responsabilidade e honestidade.',
      feedbackIncorrect: 'Incorreto! Assumir um erro e procurar corrigi-lo é uma atitude relacionada à responsabilidade e à honestidade.'
    },

    {
      question: 'Qual é a principal diferença entre ética e moral?',
      options: [
        'Não existe nenhuma diferença entre elas.',
        'A moral está relacionada a valores e costumes, enquanto a ética envolve a reflexão sobre esses valores e ações.',
        'A ética trata somente de leis.',
        'A moral existe apenas no ambiente escolar.',
        'A ética determina que todas as pessoas devem ter os mesmos costumes.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A moral está relacionada a valores, costumes e normas de um grupo, enquanto a ética envolve a reflexão sobre essas ações e princípios.',
      feedbackIncorrect: 'Incorreto! Ética e moral são conceitos relacionados, mas a moral envolve valores e costumes, enquanto a ética busca refletir sobre eles.'
    },

    {
      question: 'Por que o respeito é importante para a convivência em sociedade?',
      options: [
        'Porque elimina todas as diferenças entre as pessoas.',
        'Porque permite que apenas uma opinião seja aceita.',
        'Porque ajuda a reconhecer os direitos e as diferenças das outras pessoas.',
        'Porque impede qualquer tipo de discussão.',
        'Porque faz com que todas as pessoas tenham os mesmos pensamentos.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O respeito permite reconhecer os direitos, opiniões e diferenças das outras pessoas.',
      feedbackIncorrect: 'Incorreto! O respeito é importante porque ajuda a reconhecer os direitos e as diferenças existentes entre as pessoas.'
    },

    {
      question: 'Uma pessoa encontra uma carteira com dinheiro na rua. Qual atitude demonstra responsabilidade ética?',
      options: [
        'Ficar com o dinheiro imediatamente.',
        'Jogar a carteira fora.',
        'Tentar encontrar o proprietário ou entregá-la a uma autoridade responsável.',
        'Retirar o dinheiro e devolver somente os documentos.',
        'Esconder a carteira para ninguém encontrá-la.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Procurar devolver a carteira demonstra honestidade e responsabilidade.',
      feedbackIncorrect: 'Incorreto! Uma atitude ética seria tentar devolver a carteira ao proprietário ou entregá-la a alguém responsável.'
    },

    {
      question: 'O que significa agir com responsabilidade?',
      options: [
        'Evitar todas as consequências das próprias ações.',
        'Transferir sempre a culpa para outras pessoas.',
        'Reconhecer as consequências das próprias escolhas e assumir seus compromissos.',
        'Fazer somente aquilo que outras pessoas mandam.',
        'Nunca mudar de opinião.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Responsabilidade envolve reconhecer as consequências das próprias escolhas e cumprir compromissos.',
      feedbackIncorrect: 'Incorreto! Agir com responsabilidade significa assumir compromissos e reconhecer as consequências das próprias escolhas.'
    },

    {
      question: 'Em uma discussão, ouvir a opinião de outra pessoa mesmo discordando dela demonstra:',
      options: [
        'Falta de personalidade.',
        'Respeito e disposição para o diálogo.',
        'Obrigação de concordar.',
        'Indiferença.',
        'Fraqueza.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Ouvir opiniões diferentes demonstra respeito e disposição para o diálogo, mesmo quando existe discordância.',
      feedbackIncorrect: 'Incorreto! Ouvir uma opinião diferente pode demonstrar respeito e disposição para o diálogo.'
    },

    {
      question: 'O que significa ter liberdade de escolha?',
      options: [
        'Poder fazer qualquer coisa sem consequências.',
        'Nunca precisar considerar outras pessoas.',
        'Poder tomar decisões, considerando também suas possíveis consequências.',
        'Ser obrigado a escolher aquilo que outras pessoas querem.',
        'Não possuir nenhuma responsabilidade pelas próprias ações.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A liberdade de escolha está relacionada à capacidade de tomar decisões, mas também envolve responsabilidade pelas consequências.',
      feedbackIncorrect: 'Incorreto! Liberdade de escolha não significa ausência de consequências. As decisões podem gerar responsabilidades.'
    },

    {
      question: 'Por que a honestidade é considerada um valor importante?',
      options: [
        'Porque garante que uma pessoa nunca cometerá erros.',
        'Porque ajuda a construir confiança nas relações.',
        'Porque impede qualquer conflito.',
        'Porque faz com que todos concordem com você.',
        'Porque elimina a necessidade de responsabilidade.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A honestidade contribui para construir confiança e relações mais transparentes.',
      feedbackIncorrect: 'Incorreto! A honestidade é importante porque contribui para a construção de confiança nas relações.'
    },

    {
      question: 'Uma pessoa presencia um colega sendo tratado de forma injusta e decide ajudá-lo. Essa atitude está relacionada principalmente a qual valor?',
      options: [
        'Indiferença.',
        'Egoísmo.',
        'Solidariedade.',
        'Competição.',
        'Individualismo.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A solidariedade envolve reconhecer as dificuldades de outras pessoas e oferecer apoio.',
      feedbackIncorrect: 'Incorreto! A atitude descrita está relacionada à solidariedade, pois a pessoa decidiu ajudar alguém diante de uma situação injusta.'
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
