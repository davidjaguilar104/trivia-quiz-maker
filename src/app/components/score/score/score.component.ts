import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { TriviaQuestion } from 'src/app/models';
import { Router } from '@angular/router';

interface Answer {
  isSelected: boolean;
  isCorrect: boolean;
  answer: string;
}

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
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
      console.log(this.questionAnswers[i]);
      for (let j = 0; j < this.questionAnswers[i].length; j++) {
        const { isCorrect, isSelected } = this.questionAnswers[i][j];
        if (isCorrect && isSelected) {
          this.answersCorrect++;
        }
      }
    }

    console.log(this.answersCorrect);
  }

  restartQuiz() {
    this.quizService.reInitializeProperties();
    this.router.navigateByUrl('');
  }
}
