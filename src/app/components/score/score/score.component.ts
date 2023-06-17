import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { TriviaQuestion } from 'src/app/models';

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

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.triviaQuestions = this.quizService.triviaQuestions;
    console.log(this.triviaQuestions);
    this.questionAnswers = this.quizService.questionAnswers;
    console.log(this.questionAnswers);
    
  }
}

