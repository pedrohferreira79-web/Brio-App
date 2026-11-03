import { Component } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.page.html',
  styleUrls: ['./reading.page.scss'],
  standalone: false,
})
export class ReadingPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Read the text: "Anna usually walks to school because she lives near it. However, today she is taking the bus because it is raining." Why is Anna taking the bus today?',
      options: [
        'Because she lives far from school.',
        'Because she is late.',
        'Because it is raining.',
        'Because she does not like walking.',
        'Because the school is closed.'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! The text says that Anna is taking the bus because it is raining.',
      feedbackIncorrect: 'Incorrect! Anna is taking the bus because it is raining.'
    },

    {
      question: 'Read the text: "Tom started learning Spanish two years ago. At first, he found it difficult, but now he can have simple conversations with native speakers." What can we understand about Tom?',
      options: [
        'He stopped studying Spanish.',
        'He has improved his Spanish.',
        'He has never spoken Spanish.',
        'He thinks Spanish is impossible.',
        'He started learning Spanish last week.'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! The text shows that Tom improved from having difficulties to being able to have conversations.',
      feedbackIncorrect: 'Incorrect! Tom has improved his Spanish and can now have simple conversations.'
    },

    {
      question: 'Read the text: "The city library will be closed on Monday for maintenance. It will reopen on Tuesday morning." When will the library reopen?',
      options: [
        'Monday morning.',
        'Monday afternoon.',
        'Monday night.',
        'Tuesday morning.',
        'Wednesday morning.'
      ],
      answer: 3,
      feedbackCorrect: 'Correct! The text clearly states that the library will reopen on Tuesday morning.',
      feedbackIncorrect: 'Incorrect! The library will reopen on Tuesday morning.'
    },

    {
      question: 'Read the text: "Mark wanted to buy a new phone, but he decided to save his money instead. His current phone still works well, so he thought buying a new one was unnecessary." Why did Mark decide not to buy a new phone?',
      options: [
        'His phone was stolen.',
        'He did not have a phone.',
        'His current phone still works well.',
        'The store was closed.',
        'He lost his money.'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! Mark decided not to buy a new phone because his current phone still works well.',
      feedbackIncorrect: 'Incorrect! The text says that his current phone still works well, so he considered a new one unnecessary.'
    },

    {
      question: 'Read the text: "Emma loves cooking. Every Sunday, she prepares a different recipe for her family. Last Sunday, she made vegetable soup because the weather was cold." What did Emma prepare last Sunday?',
      options: [
        'A chocolate cake.',
        'Vegetable soup.',
        'A pizza.',
        'A fruit salad.',
        'Pasta.'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! The text says that Emma made vegetable soup last Sunday.',
      feedbackIncorrect: 'Incorrect! Emma prepared vegetable soup last Sunday.'
    },

    {
      question: 'Read the text: "Although James was tired after work, he decided to go to the gym. He wanted to maintain his exercise routine." Why did James go to the gym?',
      options: [
        'He wanted to meet his friends.',
        'He needed to work.',
        'He wanted to maintain his exercise routine.',
        'He was not tired.',
        'He wanted to buy new clothes.'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! James went to the gym because he wanted to maintain his exercise routine.',
      feedbackIncorrect: 'Incorrect! The text explains that James wanted to maintain his exercise routine.'
    },

    {
      question: 'Read the text: "The company introduced a new recycling program. Employees can now separate paper, plastic, and glass into different containers. The goal is to reduce the amount of waste produced by the company." What is the main goal of the program?',
      options: [
        'To increase the amount of waste.',
        'To reduce company waste.',
        'To eliminate all employees.',
        'To increase working hours.',
        'To sell more products.'
      ],
      answer: 1,
      feedbackCorrect: 'Correct! The main goal is to reduce the amount of waste produced by the company.',
      feedbackIncorrect: 'Incorrect! The text says that the program aims to reduce the company waste.'
    },

    {
      question: 'Read the text: "Sarah had planned to travel by plane, but her flight was canceled because of bad weather. She decided to travel by train instead." How did Sarah finally travel?',
      options: [
        'By car.',
        'By bus.',
        'By plane.',
        'By train.',
        'By boat.'
      ],
      answer: 3,
      feedbackCorrect: 'Correct! Since her flight was canceled, Sarah decided to travel by train.',
      feedbackIncorrect: 'Incorrect! Sarah finally traveled by train.'
    },

    {
      question: 'Read the text: "Daniel enjoys reading before going to bed. He usually reads for about thirty minutes every night. He says that reading helps him relax and sleep better." According to the text, why does Daniel read at night?',
      options: [
        'To study for school.',
        'To become a writer.',
        'To relax and sleep better.',
        'To avoid sleeping.',
        'To exercise his eyes.'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! Daniel says that reading helps him relax and sleep better.',
      feedbackIncorrect: 'Incorrect! The text says that reading helps Daniel relax and sleep better.'
    },

    {
      question: 'Read the text: "Many people prefer working from home because it saves commuting time. However, some workers miss the interaction with their colleagues and prefer working in an office." What is the main idea of the text?',
      options: [
        'Everyone prefers working from home.',
        'Working in an office is always better.',
        'People have different preferences about working from home or in an office.',
        'Nobody works from home anymore.',
        'Commuting is always enjoyable.'
      ],
      answer: 2,
      feedbackCorrect: 'Correct! The text presents different opinions about working from home and working in an office.',
      feedbackIncorrect: 'Incorrect! The text shows that people have different preferences about where they work.'
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