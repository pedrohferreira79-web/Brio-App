import { Component } from '@angular/core';

@Component({
  selector: 'app-filosofia-antiga',
  templateUrl: './filosofia-antiga.page.html',
  styleUrls: ['./filosofia-antiga.page.scss'],
  standalone: false,
})
export class FilosofiaAntigaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual era o principal objetivo do método filosófico utilizado por Sócrates?',
      options: [
        'Ensinar conhecimentos por meio de livros.',
        'Questionar ideias e estimular as pessoas a refletirem.',
        'Defender que os deuses controlavam todas as decisões.',
        'Criar explicações científicas sobre o universo.',
        'Impedir que as pessoas questionassem suas crenças.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Sócrates utilizava perguntas e diálogos para estimular a reflexão e a busca pelo conhecimento.',
      feedbackIncorrect: 'Incorreto! Sócrates utilizava o questionamento e o diálogo para levar as pessoas a refletirem sobre suas próprias ideias.'
    },

    {
      question: 'O que significa a famosa frase de Sócrates: "Só sei que nada sei"?',
      options: [
        'Que o conhecimento não possui nenhuma importância.',
        'Que todas as respostas estão nos livros.',
        'Que reconhecer a própria ignorância é um passo importante para buscar conhecimento.',
        'Que as pessoas nunca conseguem aprender alguma coisa.',
        'Que somente os filósofos podem possuir conhecimento.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A frase representa a importância de reconhecer os próprios limites e permanecer aberto ao aprendizado.',
      feedbackIncorrect: 'Incorreto! A frase está relacionada à consciência de que ainda temos muito a aprender.'
    },

    {
      question: 'Na filosofia de Platão, o que representa o Mundo das Ideias?',
      options: [
        'O mundo físico que percebemos pelos sentidos.',
        'Um espaço imaginário criado pelos seres humanos.',
        'Uma realidade inteligível, formada por ideias consideradas perfeitas e imutáveis.',
        'O conjunto de objetos produzidos pela sociedade.',
        'Uma explicação baseada exclusivamente na mitologia.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Para Platão, o Mundo das Ideias representa uma realidade inteligível, na qual estão as formas perfeitas e imutáveis.',
      feedbackIncorrect: 'Incorreto! Platão diferenciava o mundo sensível, percebido pelos sentidos, do Mundo das Ideias, relacionado às formas perfeitas.'
    },

    {
      question: 'O que a Alegoria da Caverna, de Platão, procura representar?',
      options: [
        'A importância da riqueza para alcançar a felicidade.',
        'A diferença entre aparência e conhecimento verdadeiro.',
        'A necessidade de viver isolado da sociedade.',
        'A superioridade da força física sobre a inteligência.',
        'A origem dos deuses da mitologia grega.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Alegoria da Caverna representa a passagem da ignorância para o conhecimento, mostrando a diferença entre aparências e realidade.',
      feedbackIncorrect: 'Incorreto! A Alegoria da Caverna trata da busca pelo conhecimento e da superação das aparências.'
    },

    {
      question: 'Qual era uma das principais ideias de Aristóteles sobre a felicidade?',
      options: [
        'A felicidade depende exclusivamente da riqueza.',
        'A felicidade é alcançada evitando qualquer responsabilidade.',
        'A felicidade está relacionada a uma vida virtuosa e equilibrada.',
        'A felicidade depende de conquistar poder político.',
        'A felicidade é impossível de ser alcançada.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Aristóteles relacionava a felicidade à prática das virtudes e ao desenvolvimento de uma vida equilibrada.',
      feedbackIncorrect: 'Incorreto! Para Aristóteles, a felicidade estava relacionada à virtude, à razão e ao desenvolvimento humano.'
    },

    {
      question: 'O que Aristóteles defendia com a ideia de "justo meio"?',
      options: [
        'Que todas as pessoas devem possuir a mesma quantidade de bens.',
        'Que devemos evitar os extremos e buscar o equilíbrio nas atitudes.',
        'Que devemos sempre escolher a opção mais fácil.',
        'Que as emoções devem controlar todas as decisões.',
        'Que não existem diferenças entre as virtudes.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O justo meio representa a busca pelo equilíbrio entre excessos e faltas, de acordo com cada situação.',
      feedbackIncorrect: 'Incorreto! O justo meio está relacionado ao equilíbrio entre dois extremos, evitando tanto o excesso quanto a deficiência.'
    },

    {
      question: 'Qual foi a importância da filosofia pré-socrática?',
      options: [
        'Defender exclusivamente as explicações religiosas.',
        'Investigar a origem e a natureza do universo por meio da razão.',
        'Criar as primeiras leis democráticas de Atenas.',
        'Substituir completamente os estudos matemáticos.',
        'Impedir o desenvolvimento de novas ideias.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Os pré-socráticos buscaram explicar a natureza e a origem do universo utilizando a observação e a razão.',
      feedbackIncorrect: 'Incorreto! Os filósofos pré-socráticos foram importantes por buscar explicações racionais para a natureza e o universo.'
    },

    {
      question: 'Qual filósofo é conhecido por desenvolver a teoria das quatro causas?',
      options: [
        'Sócrates',
        'Platão',
        'Aristóteles',
        'Epicuro',
        'Heráclito'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Aristóteles desenvolveu a teoria das quatro causas: material, formal, eficiente e final.',
      feedbackIncorrect: 'Incorreto! Aristóteles desenvolveu a teoria das quatro causas para explicar a existência e as transformações das coisas.'
    },

    {
      question: 'Qual era a principal proposta do estoicismo?',
      options: [
        'Buscar riqueza e reconhecimento acima de tudo.',
        'Evitar qualquer contato com outras pessoas.',
        'Desenvolver o autocontrole e aceitar aquilo que não podemos controlar.',
        'Defender que todas as emoções devem ser eliminadas à força.',
        'Acreditar que a felicidade depende da aprovação dos outros.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O estoicismo valorizava a razão, a virtude, o autocontrole e a compreensão daquilo que depende ou não de nós.',
      feedbackIncorrect: 'Incorreto! O estoicismo ensinava a desenvolver a razão e o autocontrole, concentrando-se naquilo que podemos controlar.'
    },

    {
      question: 'Qual era uma das principais características da filosofia helenística?',
      options: [
        'O abandono de todas as reflexões sobre a felicidade.',
        'A preocupação com a vida prática, a felicidade e a tranquilidade individual.',
        'A defesa exclusiva dos conhecimentos matemáticos.',
        'A rejeição de qualquer pensamento filosófico anterior.',
        'O estudo exclusivo das guerras entre cidades gregas.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! As escolas helenísticas, como estoicismo e epicurismo, deram grande importância à felicidade e à maneira de viver.',
      feedbackIncorrect: 'Incorreto! A filosofia helenística destacou questões práticas da existência, como felicidade, tranquilidade e comportamento humano.'
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
