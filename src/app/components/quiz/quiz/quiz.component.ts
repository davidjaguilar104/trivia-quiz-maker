import { Component, Input } from '@angular/core';
import { TriviaQuestion } from 'src/app/models';

interface Answer {
  isCorrect: boolean;
  answer: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input() triviaQuestion: TriviaQuestion = <TriviaQuestion>{};
  questionAnswers: Answer[] = <Answer[]>[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.triviaQuestion);
    this.combineQuestionAnswers();
  }

  combineQuestionAnswers() {
    const combinedAnswers: Answer[] = [];
    this.triviaQuestion.incorrect_answers.forEach((answer) => {
      combinedAnswers.push({ isCorrect: false, answer });
    });

    const answer = this.triviaQuestion.correct_answer;
    combinedAnswers.push({ isCorrect: true, answer });
    console.log(combinedAnswers);
    this.questionAnswers = combinedAnswers;
  }

  randomizeAnswerOrder() {
    // do logic here on combines answers
  }

  checkAnswer(answer: Answer) {
    console.log(answer.isCorrect);
  }
}
