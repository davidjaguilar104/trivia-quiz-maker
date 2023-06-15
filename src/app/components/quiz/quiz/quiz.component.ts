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

  combineQuestionAnswers(): void {
    const combinedAnswers: Answer[] = [];
    this.triviaQuestion.incorrect_answers.forEach((answer) => {
      combinedAnswers.push({ isCorrect: false, answer });
    });

    const answer = this.triviaQuestion.correct_answer;
    combinedAnswers.push({ isCorrect: true, answer });
    console.log(combinedAnswers);
    this.questionAnswers = this.randomizeQuestionAnswers(combinedAnswers);
  }

  randomizeQuestionAnswers(combinedAnswers: Answer[]): Answer[] {
    let currentIndex = combinedAnswers.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [combinedAnswers[currentIndex], combinedAnswers[randomIndex]] = [
        combinedAnswers[randomIndex],
        combinedAnswers[currentIndex],
      ];
    }

    return combinedAnswers;
  }

  checkAnswer(answer: Answer) {
    console.log(answer.isCorrect);
  }
}
