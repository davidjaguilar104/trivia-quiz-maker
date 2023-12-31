import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Answer, TriviaQuestion } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questionsAnsweredCount: number = 0;
  allQuestionsAnsweredEmitter = new Subject<boolean>();
  triviaQuestions: TriviaQuestion[] = [];
  questionAnswers: Answer[][] = <Answer[][]>[];

  constructor() {}

  incrementQuestionsAnsweredCount(): void {
    this.questionsAnsweredCount++;
    this.isAllQuestionsAnswered();
  }

  isAllQuestionsAnswered(): void {
    const isAllQuestionsAnswered: boolean = this.questionsAnsweredCount === 5;
    if (isAllQuestionsAnswered) {
      this.allQuestionsAnsweredEmitter.next(true);
    }
  }

  setQuestionsAnsweredCountToZero(): void {
    this.questionsAnsweredCount = 0;
  }

  setTriviaQuestions(triviaQuestions: TriviaQuestion): void {
    this.triviaQuestions.push(triviaQuestions);
  }

  setQuestionAnswers(questionAnswers: Answer[]): void {
    this.questionAnswers.push(questionAnswers);
  }

  reInitializeProperties(): void {
    this.triviaQuestions = [];
    this.questionAnswers = [];
  }
}
