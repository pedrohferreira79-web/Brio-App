import { Component } from '@angular/core';

@Component({
  selector: 'app-filosofia-politica',
  templateUrl: './filosofia-politica.page.html',
  styleUrls: ['./filosofia-politica.page.scss'],
  standalone: false,
})
export class FilosofiaPoliticaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é estudado principalmente pela Filosofia Política?',
      options: [
        'Somente o funcionamento da economia.',
        'As relações entre poder, Estado, sociedade, justiça e liberdade.',
        'Apenas as características dos partidos políticos.',
        'Somente as leis de um país.',
        'Exclusivamente as relações internacionais.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Filosofia Política investiga conceitos como poder, Estado, justiça, liberdade e as formas de organização da sociedade.',
      feedbackIncorrect: 'Incorreto! A Filosofia Política estuda questões relacionadas ao poder, Estado, sociedade, justiça, liberdade e organização política.'
    },

    {
      question: 'O que significa a ideia de contrato social na Filosofia Política?',
      options: [
        'Um contrato comercial entre empresas.',
        'Uma explicação baseada na ideia de acordo ou justificativa das regras que organizam a sociedade.',
        'Uma lei criada exclusivamente para empresas.',
        'Um documento obrigatório assinado por todos os cidadãos.',
        'Um acordo entre países para definir fronteiras.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A ideia de contrato social busca explicar ou justificar regras, autoridade e formas de organização da sociedade por meio de uma ideia de acordo ou consentimento.',
      feedbackIncorrect: 'Incorreto! O contrato social é uma ideia filosófica usada para discutir a justificativa das regras, da autoridade e da organização da sociedade. :contentReference[oaicite:1]{index=1}'
    },

    {
      question: 'Qual filósofo desenvolveu uma importante teoria do contrato social e defendeu direitos naturais como vida, liberdade e propriedade?',
      options: [
        'John Locke',
        'Aristóteles',
        'Karl Marx',
        'Friedrich Nietzsche',
        'Platão'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! John Locke relacionou o governo legítimo à proteção de direitos como vida, liberdade e propriedade. :contentReference[oaicite:2]{index=2}',
      feedbackIncorrect: 'Incorreto! John Locke é o filósofo associado a essa formulação sobre direitos naturais e governo baseado no consentimento. :contentReference[oaicite:3]{index=3}'
    },

    {
      question: 'Na teoria política de Jean-Jacques Rousseau, o que significa a expressão "vontade geral"?',
      options: [
        'A vontade pessoal do governante.',
        'A opinião da maioria em qualquer situação.',
        'Uma ideia relacionada à vontade dos membros da comunidade e ao bem comum.',
        'A vontade exclusiva dos grupos mais ricos.',
        'Uma decisão tomada sempre por um único indivíduo.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Em Rousseau, a vontade geral está relacionada à comunidade política e à busca de uma ordem comum. :contentReference[oaicite:4]{index=4}',
      feedbackIncorrect: 'Incorreto! Em Rousseau, a vontade geral está relacionada à comunidade política e à questão do bem comum, e não simplesmente à vontade pessoal de um governante. :contentReference[oaicite:5]{index=5}'
    },

    {
      question: 'Para John Rawls, o que caracteriza a "posição original"?',
      options: [
        'Uma situação histórica que realmente aconteceu.',
        'Uma situação imaginária usada para pensar princípios de justiça de maneira imparcial.',
        'Uma eleição realizada antes da criação dos Estados.',
        'Uma forma de governo baseada em um rei.',
        'Uma competição econômica entre cidadãos.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Rawls utiliza a posição original como uma situação hipotética para refletir sobre princípios de justiça de maneira imparcial. :contentReference[oaicite:6]{index=6}',
      feedbackIncorrect: 'Incorreto! A posição original de Rawls é uma situação hipotética criada para pensar princípios de justiça de maneira imparcial. :contentReference[oaicite:7]{index=7}'
    },

    {
      question: 'Na Filosofia Política, o conceito de justiça pode estar relacionado a:',
      options: [
        'Somente à punição de crimes.',
        'Somente à distribuição de dinheiro.',
        'Leis, instituições, políticas públicas e relações sociais.',
        'Apenas às decisões pessoais.',
        'Exclusivamente ao funcionamento do mercado.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A justiça pode ser discutida em relação a ações individuais, leis, políticas públicas e estruturas sociais. :contentReference[oaicite:8]{index=8}',
      feedbackIncorrect: 'Incorreto! A ideia de justiça na filosofia política pode envolver leis, políticas públicas, instituições e estruturas sociais, além das ações individuais. :contentReference[oaicite:9]{index=9}'
    },

    {
      question: 'Qual é uma questão central da Filosofia Política sobre a liberdade?',
      options: [
        'Se todas as pessoas devem ter exatamente os mesmos pensamentos.',
        'Como compreender a liberdade individual e seus limites dentro da vida em sociedade.',
        'Se a liberdade existe apenas em ambientes privados.',
        'Se somente governantes podem possuir liberdade.',
        'Se liberdade significa não possuir nenhuma responsabilidade.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Filosofia Política discute diferentes concepções de liberdade e sua relação com a vida social e política.',
      feedbackIncorrect: 'Incorreto! Uma questão importante é compreender como a liberdade individual se relaciona com regras, direitos e a convivência em sociedade. :contentReference[oaicite:10]{index=10}'
    },

    {
      question: 'Na discussão filosófica sobre o Estado, uma das principais questões é:',
      options: [
        'Qual deve ser o tamanho físico do território.',
        'Por que existe autoridade política e como ela pode ser justificada.',
        'Qual é o esporte mais praticado pelos cidadãos.',
        'Como aumentar exclusivamente a produção industrial.',
        'Como eliminar todas as diferenças entre indivíduos.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Filosofia Política discute questões sobre a autoridade, a legitimidade do poder político e a organização das instituições.',
      feedbackIncorrect: 'Incorreto! Uma questão central é compreender a origem, a autoridade e a legitimidade do poder político. :contentReference[oaicite:11]{index=11}'
    },

    {
      question: 'Qual alternativa apresenta uma característica importante das teorias do contrato social?',
      options: [
        'Todas defendem exatamente as mesmas ideias.',
        'Todas foram criadas pelo mesmo filósofo.',
        'Elas utilizam a ideia de acordo ou justificativa racional para discutir regras e autoridade política.',
        'Elas tratam exclusivamente de economia.',
        'Elas afirmam que governos não precisam de nenhuma justificativa.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Diferentes teorias do contrato social usam a ideia de acordo, consentimento ou justificativa racional para discutir normas e autoridade política. :contentReference[oaicite:12]{index=12}',
      feedbackIncorrect: 'Incorreto! As teorias do contrato social são diferentes entre si, mas utilizam de diferentes formas a ideia de acordo ou justificativa racional das regras e da autoridade. :contentReference[oaicite:13]{index=13}'
    },

    {
      question: 'Por que a Filosofia Política também discute a relação entre indivíduo e sociedade?',
      options: [
        'Porque as pessoas vivem isoladas e não dependem de nenhuma regra.',
        'Porque busca compreender como direitos, deveres, liberdade e organização coletiva podem se relacionar.',
        'Porque seu objetivo é escolher qual pessoa deve governar.',
        'Porque estuda apenas comportamentos individuais.',
        'Porque procura eliminar todas as instituições sociais.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Filosofia Política analisa como liberdade, direitos, deveres e instituições se relacionam na vida coletiva.',
      feedbackIncorrect: 'Incorreto! A relação entre indivíduo e sociedade é importante porque envolve questões de direitos, deveres, liberdade e organização coletiva.'
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
