import { Component } from '@angular/core';

@Component({
  selector: 'app-gramatica',
  templateUrl: './gramatica.page.html',
  styleUrls: ['./gramatica.page.scss'],
  standalone: false,
})
export class GramaticaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual alternativa apresenta um substantivo?',
      options: [
        'Rapidamente',
        'Bonito',
        'Casa',
        'Correr',
        'Muito'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! "Casa" é um substantivo, pois nomeia um ser ou objeto.',
      feedbackIncorrect: 'Incorreto! "Casa" é o substantivo da questão.'
    },

    {
      question: 'Assinale a alternativa em que a concordância verbal está correta.',
      options: [
        'Os alunos estudou para a prova.',
        'Os alunos estudaram para a prova.',
        'Os aluno estudaram para a prova.',
        'Os alunos estudava para a prova.',
        'Os alunos estudarão ontem para a prova.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! O sujeito "os alunos" está no plural, portanto o verbo deve concordar: estudaram.',
      feedbackIncorrect: 'Incorreto! A forma correta é "Os alunos estudaram para a prova."'
    },

    {
      question: 'Qual alternativa apresenta um adjetivo?',
      options: [
        'Felizmente',
        'Alegria',
        'Estudar',
        'Inteligente',
        'Ontem'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! "Inteligente" é um adjetivo, pois caracteriza um substantivo.',
      feedbackIncorrect: 'Incorreto! "Inteligente" é o adjetivo da questão.'
    },

    {
      question: 'Em qual alternativa o uso da crase está correto?',
      options: [
        'Fui à escola pela manhã.',
        'Fui à pé para casa.',
        'Entreguei o livro à João.',
        'Começou à chover.',
        'Cheguei à casa de Miguel ontem.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Em "fui à escola", ocorre a junção da preposição "a" com o artigo "a".',
      feedbackIncorrect: 'Incorreto! A alternativa correta é "Fui à escola pela manhã."'
    },

    {
      question: 'Qual alternativa apresenta uma palavra escrita corretamente?',
      options: [
        'Excessão',
        'Exceção',
        'Esceção',
        'Exessão',
        'Eceção'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A grafia correta é "exceção".',
      feedbackIncorrect: 'Incorreto! A palavra é escrita corretamente como "exceção".'
    },

    {
      question: 'Qual é a função da vírgula na frase: "Kauan, meu amigo, chegou cedo."?',
      options: [
        'Separar o sujeito do verbo.',
        'Indicar uma pergunta.',
        'Isolar o vocativo.',
        'Isolar um aposto.',
        'Separar duas orações coordenadas.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! "Meu amigo" é um aposto explicativo e está isolado por vírgulas.',
      feedbackIncorrect: 'Incorreto! "Meu amigo" funciona como um aposto explicativo.'
    },

    {
      question: 'Qual alternativa apresenta um pronome pessoal?',
      options: [
        'Casa',
        'Bonito',
        'Eu',
        'Rapidamente',
        'Estudar'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! "Eu" é um pronome pessoal do caso reto.',
      feedbackIncorrect: 'Incorreto! "Eu" é o pronome pessoal da questão.'
    },

    {
      question: 'Assinale a alternativa com concordância nominal correta.',
      options: [
        'As meninas estava cansada.',
        'As menina estavam cansadas.',
        'As meninas estavam cansadas.',
        'As meninas estava cansadas.',
        'As menina estava cansada.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! "Meninas" e "cansadas" estão no feminino e plural, concordando corretamente.',
      feedbackIncorrect: 'Incorreto! A forma correta é "As meninas estavam cansadas."'
    },

    {
      question: 'Qual alternativa apresenta um verbo no pretérito perfeito?',
      options: [
        'Eu estudo todos os dias.',
        'Eu estudarei amanhã.',
        'Eu estudava quando era criança.',
        'Eu estudei ontem.',
        'Eu estou estudando agora.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! "Estudei" indica uma ação concluída no passado.',
      feedbackIncorrect: 'Incorreto! "Estudei" está no pretérito perfeito do indicativo.'
    },

    {
      question: 'Qual alternativa está corretamente pontuada?',
      options: [
        'João foi ao mercado, e comprou frutas.',
        'João foi ao mercado e comprou frutas.',
        'João, foi ao mercado e comprou frutas.',
        'João foi, ao mercado e comprou frutas.',
        'João foi ao mercado e, comprou frutas.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A frase está corretamente pontuada sem a necessidade de vírgula entre o sujeito e o verbo.',
      feedbackIncorrect: 'Incorreto! A forma correta é "João foi ao mercado e comprou frutas."'
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