import { Component } from '@angular/core';

@Component({
  selector: 'app-quimica-organica',
  templateUrl: './quimica-organica.page.html',
  styleUrls: ['./quimica-organica.page.scss'],
  standalone: false,
})
export class QuimicaOrganicaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual elemento químico está presente em todas as substâncias orgânicas?',
      options: [
        'Oxigênio',
        'Hidrogênio',
        'Carbono',
        'Nitrogênio',
        'Enxofre'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O carbono é o elemento fundamental dos compostos orgânicos.',
      feedbackIncorrect: 'Incorreto! O carbono é o elemento fundamental presente nos compostos orgânicos.'
    },

    {
      question: 'Qual é a principal característica do átomo de carbono que permite formar uma grande variedade de compostos?',
      options: [
        'Possuir apenas dois elétrons.',
        'Ser capaz de formar quatro ligações covalentes.',
        'Não formar ligações químicas.',
        'Possuir sempre carga negativa.',
        'Ser um metal de alta condutividade.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O carbono é tetravalente e pode formar quatro ligações covalentes, possibilitando uma enorme variedade de estruturas.',
      feedbackIncorrect: 'Incorreto! O carbono é tetravalente, podendo formar até quatro ligações covalentes.'
    },

    {
      question: 'Qual das opções representa a fórmula geral dos alcanos?',
      options: [
        'CnH₂n',
        'CnH₂n-2',
        'CnH₂n+2',
        'CnHn',
        'CnH₂n+1'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Os alcanos são hidrocarbonetos saturados e possuem fórmula geral CnH₂n+2.',
      feedbackIncorrect: 'Incorreto! A fórmula geral dos alcanos é CnH₂n+2.'
    },

    {
      question: 'Qual é o nome do hidrocarboneto CH₄?',
      options: [
        'Etano',
        'Propano',
        'Metano',
        'Butano',
        'Meteno'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! CH₄ é o metano, o alcano mais simples.',
      feedbackIncorrect: 'Incorreto! O composto CH₄ é chamado de metano.'
    },

    {
      question: 'Qual função orgânica apresenta o grupo hidroxila (-OH) ligado a um carbono saturado?',
      options: [
        'Álcool',
        'Aldeído',
        'Cetona',
        'Éster',
        'Ácido carboxílico'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Os álcoois apresentam o grupo hidroxila (-OH) ligado a um carbono saturado.',
      feedbackIncorrect: 'Incorreto! A função orgânica que apresenta -OH ligado a carbono saturado é o álcool.'
    },

    {
      question: 'Qual função orgânica possui o grupo carboxila (-COOH)?',
      options: [
        'Éter',
        'Amina',
        'Ácido carboxílico',
        'Cetona',
        'Álcool'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O grupo carboxila (-COOH) é característico dos ácidos carboxílicos.',
      feedbackIncorrect: 'Incorreto! O grupo -COOH caracteriza os ácidos carboxílicos.'
    },

    {
      question: 'Qual dos compostos abaixo é um hidrocarboneto?',
      options: [
        'H₂O',
        'CH₄',
        'CH₃OH',
        'CO₂',
        'NaCl'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O CH₄ é formado somente por carbono e hidrogênio, portanto é um hidrocarboneto.',
      feedbackIncorrect: 'Incorreto! Hidrocarbonetos são compostos formados exclusivamente por carbono e hidrogênio. CH₄ é um exemplo.'
    },

    {
      question: 'Qual é o nome do composto CH₃-CH₂-CH₃?',
      options: [
        'Metano',
        'Etano',
        'Propano',
        'Butano',
        'Pentano'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A cadeia possui três átomos de carbono ligados por ligações simples, sendo o propano.',
      feedbackIncorrect: 'Incorreto! CH₃-CH₂-CH₃ possui três carbonos e é chamado de propano.'
    },

    {
      question: 'Uma ligação dupla entre dois átomos de carbono caracteriza qual tipo de hidrocarboneto?',
      options: [
        'Alcano',
        'Alceno',
        'Alcino',
        'Cicloalcano',
        'Aromático'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Os alcenos possuem pelo menos uma ligação dupla entre átomos de carbono.',
      feedbackIncorrect: 'Incorreto! Hidrocarbonetos que apresentam ligação dupla C=C são classificados como alcenos.'
    },

    {
      question: 'Qual função orgânica é caracterizada pela presença do grupo carbonila (C=O) no interior da cadeia carbônica?',
      options: [
        'Álcool',
        'Cetona',
        'Amina',
        'Éter',
        'Ácido carboxílico'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Nas cetonas, o grupo carbonila (C=O) está localizado entre dois carbonos da cadeia.',
      feedbackIncorrect: 'Incorreto! A cetona possui o grupo carbonila localizado no interior da cadeia carbônica.'
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
