import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Answer, TriviaQuestion } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questionsAnsweredCount: number = 0;
  activatedEmitter = new Subject<boolean>();
  triviaQuestions: TriviaQuestion[] = [];
  questionAnswers: Answer[][] = <Answer[][]>[];

  constructor() {}

  incrementQuestionsAnsweredCount(): void {
    this.questionsAnsweredCount++;
    this.isAllQuestionsAnswered();
  }

  isAllQuestionsAnswered(): void {
    const isAllQuestionsAnswered = this.questionsAnsweredCount === 5;
    if (isAllQuestionsAnswered) {
      this.activatedEmitter.next(true);
    }
  }

  setQuestionsAnsweredCountToZero(): void {
    this.questionsAnsweredCount = 0;
  }

  setTriviaQuestions(triviaQuestions: TriviaQuestion): void {
    this.triviaQuestions.push(triviaQuestions);
    console.log(this.triviaQuestions);
  }

  setQuestionAnswers(questionAnswers: Answer[]): void {
    this.questionAnswers.push(questionAnswers);
    console.log(this.questionAnswers);
  }

  reInitializeProperties(): void {
    this.triviaQuestions = [];
    this.questionAnswers = [];
  }
}
