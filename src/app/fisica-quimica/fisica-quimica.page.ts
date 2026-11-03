import { Component } from '@angular/core';

@Component({
  selector: 'app-fisica-quimica',
  templateUrl: './fisica-quimica.page.html',
  styleUrls: ['./fisica-quimica.page.scss'],
  standalone: false,
})
export class FisicaQuimicaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que estuda a Físico-Química?',
      options: [
        'Somente a classificação dos elementos químicos.',
        'As relações entre fenômenos físicos e químicos.',
        'Somente os seres vivos.',
        'Apenas a estrutura dos átomos.',
        'Somente as propriedades dos metais.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Físico-Química estuda as relações entre fenômenos físicos e químicos, como energia, velocidade das reações e equilíbrio.',
      feedbackIncorrect: 'Incorreto! A Físico-Química relaciona conceitos físicos e químicos para explicar diversos fenômenos.'
    },

    {
      question: 'Em uma reação exotérmica, o sistema:',
      options: [
        'Absorve calor do ambiente.',
        'Não troca energia.',
        'Libera energia para o ambiente.',
        'Sempre diminui de temperatura.',
        'Deixa de produzir novas substâncias.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Em uma reação exotérmica, energia é liberada para o ambiente, geralmente na forma de calor.',
      feedbackIncorrect: 'Incorreto! Reações exotérmicas liberam energia para o ambiente.'
    },

    {
      question: 'Em uma reação endotérmica, ocorre:',
      options: [
        'Liberação de calor.',
        'Absorção de energia do ambiente.',
        'Desaparecimento dos reagentes.',
        'Produção obrigatória de luz.',
        'Redução da quantidade de matéria.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Reações endotérmicas absorvem energia do ambiente.',
      feedbackIncorrect: 'Incorreto! Uma reação endotérmica necessita absorver energia do ambiente.'
    },

    {
      question: 'Qual fator pode aumentar a velocidade de uma reação química?',
      options: [
        'Diminuir a temperatura em qualquer situação.',
        'Diminuir a concentração dos reagentes.',
        'Aumentar a temperatura.',
        'Retirar todos os reagentes.',
        'Impedir o contato entre os reagentes.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O aumento da temperatura geralmente aumenta a velocidade das reações químicas.',
      feedbackIncorrect: 'Incorreto! O aumento da temperatura geralmente aumenta a velocidade das reações.'
    },

    {
      question: 'Qual é a principal função de um catalisador em uma reação química?',
      options: [
        'Ser consumido completamente na reação.',
        'Aumentar a energia de ativação.',
        'Diminuir a energia de ativação da reação.',
        'Impedir a formação dos produtos.',
        'Alterar permanentemente a quantidade de reagentes.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! O catalisador oferece um caminho alternativo para a reação, diminuindo sua energia de ativação.',
      feedbackIncorrect: 'Incorreto! Um catalisador diminui a energia de ativação e pode aumentar a velocidade da reação.'
    },

    {
      question: 'O que acontece com a velocidade de uma reação quando a concentração dos reagentes aumenta, em condições adequadas?',
      options: [
        'Geralmente aumenta.',
        'Sempre diminui.',
        'Permanece obrigatoriamente igual.',
        'A reação deixa de existir.',
        'A temperatura necessariamente chega a zero.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Em muitas reações, o aumento da concentração dos reagentes aumenta a frequência das colisões e pode aumentar a velocidade da reação.',
      feedbackIncorrect: 'Incorreto! Em condições adequadas, aumentar a concentração dos reagentes pode aumentar a velocidade da reação.'
    },

    {
      question: 'Em um sistema químico em equilíbrio, as reações direta e inversa:',
      options: [
        'Param completamente.',
        'Acontecem apenas uma vez.',
        'Possuem velocidades iguais.',
        'Possuem sempre concentrações iguais.',
        'Não possuem relação entre si.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! No equilíbrio químico, as velocidades das reações direta e inversa são iguais.',
      feedbackIncorrect: 'Incorreto! No equilíbrio químico, as reações continuam acontecendo, mas suas velocidades são iguais.'
    },

    {
      question: 'O que indica um valor de pH menor que 7 em uma solução aquosa?',
      options: [
        'A solução é básica.',
        'A solução é neutra.',
        'A solução é ácida.',
        'A solução não possui água.',
        'A solução é obrigatoriamente um sal.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Em condições usuais, uma solução com pH menor que 7 é considerada ácida.',
      feedbackIncorrect: 'Incorreto! Uma solução com pH menor que 7 é considerada ácida.'
    },

    {
      question: 'Qual é aproximadamente o valor do pH de uma solução neutra a 25 °C?',
      options: [
        '0',
        '3',
        '5',
        '7',
        '14'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A 25 °C, uma solução neutra apresenta pH aproximadamente igual a 7.',
      feedbackIncorrect: 'Incorreto! A 25 °C, o pH de uma solução neutra é aproximadamente 7.'
    },

    {
      question: 'Se uma reação possui ΔH < 0, ela é classificada como:',
      options: [
        'Endotérmica.',
        'Exotérmica.',
        'Neutra.',
        'Isotérmica obrigatoriamente.',
        'Inexistente.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Quando ΔH é negativo, a reação libera energia e é classificada como exotérmica.',
      feedbackIncorrect: 'Incorreto! Um ΔH negativo indica uma reação exotérmica.'
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