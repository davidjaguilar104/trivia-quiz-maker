import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Answer, TriviaQuestion } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  triviaQuestions: TriviaQuestion[] = [];
  questionAnswers: Answer[][] = <Answer[][]>[];
  answersCorrect: number = 0;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.triviaQuestions = this.quizService.triviaQuestions;
    this.questionAnswers = this.quizService.questionAnswers;
    this.determineQuizScore();
  }

  determineQuizScore() {
    for (let i = 0; i < this.questionAnswers.length; i++) {
      for (let j = 0; j < this.questionAnswers[i].length; j++) {
        const isCorrect: boolean = this.questionAnswers[i][j].isCorrect;
        const isSelected: boolean = this.questionAnswers[i][j].isSelected;
        if (isCorrect && isSelected) {
          this.answersCorrect++;
        }
      }
    }
  }

  restartQuiz() {
    this.quizService.reInitializeProperties();
    this.router.navigateByUrl('');
  }
}
