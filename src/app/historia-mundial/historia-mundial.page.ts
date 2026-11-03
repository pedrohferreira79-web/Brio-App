import { Component } from '@angular/core';

@Component({
  selector: 'app-historia-mundial',
  templateUrl: './historia-mundial.page.html',
  styleUrls: ['./historia-mundial.page.scss'],
  standalone: false,
})
export class HistoriaMundialPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual civilização antiga ficou conhecida pela construção das pirâmides de Gizé?',
      options: [
        'Civilização Grega',
        'Civilização Romana',
        'Civilização Egípcia',
        'Civilização Persa',
        'Civilização Fenícia'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Os antigos egípcios construíram as pirâmides de Gizé, utilizadas como monumentos funerários para os faraós.',
      feedbackIncorrect: 'Incorreto! As pirâmides de Gizé foram construídas pelos antigos egípcios e representam um importante marco da arquitetura antiga.'
    },

    {
      question: 'Qual foi uma das principais contribuições da Grécia Antiga para a sociedade ocidental?',
      options: [
        'A criação da imprensa moderna.',
        'O desenvolvimento da democracia em Atenas e de importantes reflexões filosóficas.',
        'A invenção da máquina a vapor.',
        'A criação dos primeiros computadores.',
        'O desenvolvimento da eletricidade.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Grécia Antiga contribuiu para o desenvolvimento da democracia ateniense, da filosofia, das artes e de outras áreas do conhecimento.',
      feedbackIncorrect: 'Incorreto! A Grécia Antiga teve grande influência no desenvolvimento da democracia, da filosofia e das artes.'
    },

    {
      question: 'Qual acontecimento marcou a queda do Império Romano do Ocidente?',
      options: [
        'A Revolução Francesa, em 1789.',
        'A conquista de Constantinopla, em 1453.',
        'A deposição do último imperador romano do Ocidente, em 476.',
        'O início da Primeira Guerra Mundial.',
        'A descoberta da América.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Em 476, o último imperador romano do Ocidente foi deposto, acontecimento tradicionalmente utilizado para marcar o fim desse império.',
      feedbackIncorrect: 'Incorreto! A queda do Império Romano do Ocidente é tradicionalmente associada ao ano de 476.'
    },

    {
      question: 'Qual foi uma das principais causas da Revolução Francesa de 1789?',
      options: [
        'A igualdade econômica entre todas as classes sociais.',
        'A insatisfação popular com as desigualdades sociais, os privilégios da nobreza e a crise econômica.',
        'A expansão industrial dos Estados Unidos.',
        'A disputa pelo controle do continente americano entre Brasil e Portugal.',
        'A criação da Organização das Nações Unidas.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Revolução Francesa foi impulsionada por desigualdades sociais, crise financeira e insatisfação com os privilégios do Antigo Regime.',
      feedbackIncorrect: 'Incorreto! A crise econômica, os privilégios da nobreza e do clero e as desigualdades sociais contribuíram para a Revolução Francesa.'
    },

    {
      question: 'Qual transformação foi característica da Revolução Industrial iniciada na Inglaterra?',
      options: [
        'Substituição das fábricas pelo trabalho exclusivamente artesanal.',
        'Redução completa do comércio internacional.',
        'Expansão das máquinas e da produção industrial em larga escala.',
        'Fim das cidades e retorno da população ao campo.',
        'Desaparecimento do trabalho assalariado.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A Revolução Industrial transformou a produção por meio das máquinas, das fábricas e do crescimento da produção em larga escala.',
      feedbackIncorrect: 'Incorreto! A Revolução Industrial foi marcada pela mecanização da produção e pela expansão das fábricas.'
    },

    {
      question: 'Qual foi o principal motivo que levou ao início da Primeira Guerra Mundial em 1914?',
      options: [
        'A queda do Muro de Berlim.',
        'A invasão da Polônia pela Alemanha.',
        'O assassinato do arquiduque Francisco Ferdinando, em um contexto de tensões entre potências europeias.',
        'A Revolução Russa de 1917.',
        'O ataque japonês a Pearl Harbor.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O assassinato do arquiduque Francisco Ferdinando foi o estopim da Primeira Guerra Mundial, em meio a rivalidades e alianças entre países europeus.',
      feedbackIncorrect: 'Incorreto! O assassinato do arquiduque Francisco Ferdinando, em 1914, desencadeou uma crise que levou ao início da guerra.'
    },

    {
      question: 'Qual acontecimento marcou o início da Segunda Guerra Mundial, em 1939?',
      options: [
        'A invasão da Polônia pela Alemanha nazista.',
        'A construção do Muro de Berlim.',
        'A Revolução Russa.',
        'A independência dos Estados Unidos.',
        'A queda do Império Romano.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A invasão alemã à Polônia, em 1º de setembro de 1939, levou ao início da Segunda Guerra Mundial na Europa.',
      feedbackIncorrect: 'Incorreto! A Segunda Guerra Mundial começou na Europa em 1939, após a invasão alemã à Polônia.'
    },

    {
      question: 'O que foi a Guerra Fria?',
      options: [
        'Uma guerra direta entre Brasil e Argentina.',
        'Um conflito militar entre países africanos.',
        'Uma disputa política, econômica, ideológica e tecnológica entre Estados Unidos e União Soviética.',
        'Uma guerra entre as potências europeias durante a Idade Média.',
        'Uma revolução que aconteceu exclusivamente na China.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A Guerra Fria foi marcada pela rivalidade entre Estados Unidos e União Soviética, envolvendo disputas ideológicas, militares, econômicas e tecnológicas.',
      feedbackIncorrect: 'Incorreto! A Guerra Fria foi uma disputa entre Estados Unidos e União Soviética, principalmente após a Segunda Guerra Mundial.'
    },

    {
      question: 'O que representou a queda do Muro de Berlim, em 1989?',
      options: [
        'O início da Primeira Guerra Mundial.',
        'O fortalecimento da divisão entre Alemanha Oriental e Ocidental.',
        'Um importante símbolo do enfraquecimento da divisão da Guerra Fria na Europa.',
        'A criação da União Soviética.',
        'O início da Revolução Francesa.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A queda do Muro de Berlim simbolizou o enfraquecimento da divisão entre os blocos da Guerra Fria e abriu caminho para a reunificação alemã.',
      feedbackIncorrect: 'Incorreto! A queda do muro, em 1989, tornou-se um símbolo do fim da divisão da Alemanha e das transformações no cenário da Guerra Fria.'
    },

    {
      question: 'Qual foi um dos principais objetivos da criação da Organização das Nações Unidas (ONU), em 1945?',
      options: [
        'Controlar o comércio de todos os países.',
        'Estabelecer uma única moeda mundial.',
        'Promover a cooperação internacional e contribuir para a manutenção da paz e da segurança.',
        'Criar um governo mundial obrigatório.',
        'Substituir todos os governos nacionais.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A ONU foi criada após a Segunda Guerra Mundial com o objetivo de promover a paz, a segurança e a cooperação internacional.',
      feedbackIncorrect: 'Incorreto! A ONU surgiu em 1945 com o propósito de fortalecer a cooperação entre os países e evitar novos conflitos de grandes proporções.'
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
