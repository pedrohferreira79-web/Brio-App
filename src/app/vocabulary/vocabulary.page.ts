import { Component } from '@angular/core';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.page.html',
  styleUrls: ['./vocabulary.page.scss'],
  standalone: false,
})
export class VocabularyPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'What is the meaning of the word "reliable"?',
      options: [
        'Someone who is always late.',
        'Someone or something that can be trusted.',
        'Someone who is very angry.',
        'Something that is extremely expensive.',
        'Someone who avoids helping others.'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! "Reliable" describes someone or something that can be trusted or depended on.',
      feedbackIncorrect: 'Incorrect! "Reliable" means someone or something that can be trusted or depended on.'
    },

    {
      question: 'Choose the word that is closest in meaning to "purchase".',
      options: [
        'Sell',
        'Borrow',
        'Buy',
        'Lose',
        'Repair'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! "Purchase" is a more formal word that means "buy".',
      feedbackIncorrect: 'Incorrect! "Purchase" means "buy".'
    },

    {
      question: 'What does the expression "give up" mean?',
      options: [
        'To continue trying.',
        'To start something new.',
        'To stop trying or quit.',
        'To give someone a present.',
        'To arrive somewhere.'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! "Give up" means to stop trying or to quit something.',
      feedbackIncorrect: 'Incorrect! "Give up" means to stop trying or quit.'
    },

    {
      question: 'Choose the best word to complete the sentence: "The movie was so _____ that I could not stop watching it."',
      options: [
        'boring',
        'confusing',
        'fascinating',
        'empty',
        'weak'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! "Fascinating" means extremely interesting or attractive.',
      feedbackIncorrect: 'Incorrect! The correct word is "fascinating", because the movie was very interesting.'
    },

    {
      question: 'What is the opposite of "ancient"?',
      options: [
        'Old',
        'Modern',
        'Historic',
        'Traditional',
        'Past'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! "Modern" is the opposite of "ancient".',
      feedbackIncorrect: 'Incorrect! The opposite of "ancient" is "modern".'
    },

    {
      question: 'Choose the correct word: "I am very _____ about my exam tomorrow."',
      options: [
        'nervous',
        'wooden',
        'silent',
        'empty',
        'narrow'
      ],
      answer: 0,
      feedbackCorrect: 'Correct! "Nervous" is used when someone feels worried or anxious about something.',
      feedbackIncorrect: 'Incorrect! "Nervous" is the appropriate word when someone feels worried about an exam.'
    },

    {
      question: 'What does "look forward to" mean?',
      options: [
        'To avoid something.',
        'To forget something.',
        'To be excited about something that will happen.',
        'To look behind you.',
        'To cancel a plan.'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! "Look forward to" means to feel excited or happy about something that will happen in the future.',
      feedbackIncorrect: 'Incorrect! "Look forward to" means to be excited about something that will happen.'
    },

    {
      question: 'Choose the best synonym for "difficult".',
      options: [
        'Easy',
        'Simple',
        'Challenging',
        'Cheap',
        'Quiet'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! "Challenging" can be used as a synonym for "difficult".',
      feedbackIncorrect: 'Incorrect! "Challenging" is the closest synonym to "difficult".'
    },

    {
      question: 'What does "actually" mean in the sentence: "I actually enjoyed the book more than I expected."?',
      options: [
        'In the future',
        'In fact or really',
        'Never',
        'Only sometimes',
        'Almost'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! In this context, "actually" means "in fact" or "really".',
      feedbackIncorrect: 'Incorrect! In this sentence, "actually" means "in fact" or "really".'
    },

    {
      question: 'Choose the best word to complete the sentence: "The instructions were very _____, so everyone understood what to do."',
      options: [
        'unclear',
        'confusing',
        'clear',
        'distant',
        'rough'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! "Clear" means easy to understand.',
      feedbackIncorrect: 'Incorrect! The correct word is "clear", because the instructions were easy to understand.'
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
