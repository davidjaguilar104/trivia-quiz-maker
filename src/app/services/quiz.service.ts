import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questionsAnsweredCount: number = 0;
  activatedEmitter = new Subject<boolean>();

  constructor() {}

  incrementQuestionsAnsweredCount() {
    this.questionsAnsweredCount++;
    this.isAllQuestionsAnswered();
  }

  isAllQuestionsAnswered() {
    const isAllQuestionsAnswered = this.questionsAnsweredCount === 5;
    if (isAllQuestionsAnswered) {
      this.activatedEmitter.next(true);
    }
  }
}
