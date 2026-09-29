import { Component } from '@angular/core';

@Component({
  selector: 'app-citologia',
  templateUrl: './citologia.page.html',
  styleUrls: ['./citologia.page.scss'],
  standalone: false,
})
export class CitologiaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual é a principal função da membrana plasmática?',
      options: [
        'Produzir energia para a célula.',
        'Controlar a entrada e saída de substâncias.',
        'Produzir proteínas.',
        'Armazenar o material genético.',
        'Realizar a digestão celular.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A membrana plasmática controla a entrada e a saída de substâncias da célula.',
      feedbackIncorrect: 'Incorreto! A principal função da membrana plasmática é controlar a entrada e saída de substâncias.'
    },

    {
      question: 'Qual organela é responsável pela produção de energia na célula?',
      options: [
        'Ribossomo',
        'Lisossomo',
        'Mitocôndria',
        'Núcleo',
        'Complexo de Golgi'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! As mitocôndrias produzem ATP por meio da respiração celular.',
      feedbackIncorrect: 'Incorreto! A organela responsável pela produção de energia na forma de ATP é a mitocôndria.'
    },

    {
      question: 'Qual estrutura celular contém a maior parte do material genético em uma célula eucariótica?',
      options: [
        'Citoplasma',
        'Ribossomo',
        'Núcleo',
        'Membrana plasmática',
        'Lisossomo'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O núcleo contém a maior parte do DNA das células eucarióticas.',
      feedbackIncorrect: 'Incorreto! Em células eucarióticas, a maior parte do material genético está localizada no núcleo.'
    },

    {
      question: 'Qual organela está diretamente relacionada à produção de proteínas?',
      options: [
        'Ribossomo',
        'Mitocôndria',
        'Lisossomo',
        'Vacúolo',
        'Centríolo'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Os ribossomos são responsáveis pela síntese de proteínas.',
      feedbackIncorrect: 'Incorreto! A produção de proteínas ocorre nos ribossomos.'
    },

    {
      question: 'O que acontece com uma célula animal colocada em uma solução muito concentrada em relação ao seu interior?',
      options: [
        'A célula recebe água e aumenta de tamanho.',
        'A célula permanece exatamente igual.',
        'A célula perde água e pode diminuir de tamanho.',
        'A célula começa a produzir mais DNA.',
        'A célula aumenta sua produção de proteínas.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Em uma solução hipertônica, a água tende a sair da célula por osmose, fazendo com que ela diminua de tamanho.',
      feedbackIncorrect: 'Incorreto! Em uma solução mais concentrada, a água sai da célula por osmose, podendo causar sua diminuição.'
    },

    {
      question: 'Qual organela participa da digestão de partículas e componentes celulares?',
      options: [
        'Lisossomo',
        'Mitocôndria',
        'Ribossomo',
        'Centríolo',
        'Núcleo'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Os lisossomos possuem enzimas que participam da digestão intracelular.',
      feedbackIncorrect: 'Incorreto! Os lisossomos são responsáveis pela digestão intracelular.'
    },

    {
      question: 'Qual é uma característica encontrada nas células vegetais, mas não nas células animais?',
      options: [
        'Membrana plasmática',
        'Ribossomos',
        'Mitocôndrias',
        'Parede celular',
        'Citoplasma'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A parede celular é uma estrutura característica das células vegetais.',
      feedbackIncorrect: 'Incorreto! A parede celular é uma característica presente nas células vegetais.'
    },

    {
      question: 'Qual é a principal função dos cloroplastos nas células vegetais?',
      options: [
        'Realizar a respiração celular.',
        'Produzir proteínas.',
        'Realizar a fotossíntese.',
        'Controlar a divisão celular.',
        'Fazer a digestão celular.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Os cloroplastos são responsáveis pela realização da fotossíntese.',
      feedbackIncorrect: 'Incorreto! A principal função dos cloroplastos é realizar a fotossíntese.'
    },

    {
      question: 'O transporte de moléculas através da membrana sem gasto de energia é chamado de:',
      options: [
        'Transporte ativo',
        'Difusão simples',
        'Endocitose',
        'Exocitose',
        'Fagocitose'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A difusão simples ocorre sem gasto de energia, seguindo o gradiente de concentração.',
      feedbackIncorrect: 'Incorreto! A difusão simples é um tipo de transporte passivo que não exige gasto de energia.'
    },

    {
      question: 'Qual estrutura é responsável por organizar e empacotar substâncias produzidas pela célula?',
      options: [
        'Complexo de Golgi',
        'Mitocôndria',
        'Núcleo',
        'Ribossomo',
        'Centríolo'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! O complexo de Golgi modifica, organiza e empacota substâncias produzidas pela célula.',
      feedbackIncorrect: 'Incorreto! O complexo de Golgi é responsável por modificar, organizar e empacotar substâncias.'
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