import { Component } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.page.html',
  styleUrls: ['./grammar.page.scss'],
  standalone: false,
})
export class GrammarPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Choose the correct option: "She _____ to school every day."',
      options: [
        'go',
        'goes',
        'going',
        'gone',
        'is go'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! With "she", the verb in the Simple Present receives -s: "She goes".',
      feedbackIncorrect: 'Incorrect! With "she", we use "goes" in the Simple Present.'
    },

    {
      question: 'Which sentence is grammatically correct?',
      options: [
        'I have seen that movie yesterday.',
        'I saw that movie yesterday.',
        'I seeing that movie yesterday.',
        'I has seen that movie yesterday.',
        'I see that movie yesterday.'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! "Yesterday" refers to a finished time, so the Simple Past is used: "I saw".',
      feedbackIncorrect: 'Incorrect! With "yesterday", the Simple Past is normally used: "I saw that movie yesterday."'
    },

    {
      question: 'Choose the correct option: "They _____ dinner when I arrived."',
      options: [
        'have',
        'had',
        'were having',
        'are having',
        'has'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! The Past Continuous describes an action that was happening when another action occurred.',
      feedbackIncorrect: 'Incorrect! The correct form is "were having" because the action was in progress when you arrived.'
    },

    {
      question: 'Choose the correct preposition: "I have lived here _____ 2020."',
      options: [
        'for',
        'since',
        'at',
        'during',
        'by'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! "Since" is used with a specific starting point, such as 2020.',
      feedbackIncorrect: 'Incorrect! We use "since" with a specific point in time: "since 2020".'
    },

    {
      question: 'Which sentence correctly uses the Present Perfect?',
      options: [
        'I have finished my homework.',
        'I finished my homework tomorrow.',
        'I have finish my homework.',
        'I am finished my homework.',
        'I has finished my homework.'
      ],
      answer: 0,
      feedbackCorrect: 'Correct! The Present Perfect uses "have/has" + past participle.',
      feedbackIncorrect: 'Incorrect! The correct structure is "have/has + past participle": "I have finished".'
    },

    {
      question: 'Choose the correct pronoun: "This is my sister. _____ is a doctor."',
      options: [
        'He',
        'It',
        'They',
        'She',
        'We'
      ],
      answer: 3,
      feedbackCorrect: 'Correct! "She" is the appropriate subject pronoun for a female person.',
      feedbackIncorrect: 'Incorrect! The correct pronoun is "She".'
    },

    {
      question: 'Choose the correct option: "If it rains tomorrow, we _____ at home."',
      options: [
        'stayed',
        'stay',
        'will stay',
        'would stayed',
        'staying'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! This is the First Conditional: If + Present Simple, will + verb.',
      feedbackIncorrect: 'Incorrect! The First Conditional uses "If + Present Simple" followed by "will + verb".'
    },

    {
      question: 'Which sentence is correct?',
      options: [
        'There is many students in the classroom.',
        'There are many students in the classroom.',
        'There be many students in the classroom.',
        'There has many students in the classroom.',
        'There am many students in the classroom.'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! "Students" is plural, so we use "There are".',
      feedbackIncorrect: 'Incorrect! Because "students" is plural, the correct form is "There are".'
    },

    {
      question: 'Choose the correct comparative form: "My car is _____ than yours."',
      options: [
        'fast',
        'more fast',
        'faster',
        'fastest',
        'the faster'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! The comparative form of "fast" is "faster".',
      feedbackIncorrect: 'Incorrect! The correct comparative form is "faster".'
    },

    {
      question: 'Choose the correct option: "You _____ wear a seatbelt when driving."',
      options: [
        'should',
        'would to',
        'are',
        'has',
        'did'
      ],
      answer: 0,
      feedbackCorrect: 'Correct! "Should" is used to give advice or express what is recommended.',
      feedbackIncorrect: 'Incorrect! "Should" is the correct modal verb for giving advice or recommendations.'
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