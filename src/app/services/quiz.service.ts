import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TriviaQuestion } from '../models';

interface Answer {
  isSelected: boolean;
  isCorrect: boolean;
  answer: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questionsAnsweredCount: number = 0;
  activatedEmitter = new Subject<boolean>();
  triviaQuestions: TriviaQuestion[] = [];

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

  setTriviaQuestions(triviaQuestions: TriviaQuestion[]): void {
    this.triviaQuestions = triviaQuestions;
    console.log(this.triviaQuestions);
  }
}
