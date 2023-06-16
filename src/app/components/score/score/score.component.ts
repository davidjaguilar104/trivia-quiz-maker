import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { TriviaQuestion } from 'src/app/models';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  triviaQuestions: TriviaQuestion[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.triviaQuestions = this.quizService.triviaQuestions;
  }
}
