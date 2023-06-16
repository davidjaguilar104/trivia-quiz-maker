import { Component, OnInit, ViewChildren } from '@angular/core';
import { TriviaCategory, TriviaQuestion } from '../../../models';
import { TriviaService } from '../../../services/trivia.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizComponent } from '../../quiz/quiz/quiz.component';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  triviaCategories: TriviaCategory[] = [];
  triviaQuestions: TriviaQuestion[] = [];
  dropdownForm!: FormGroup;
  allQuestionsAnswered: boolean = false;

  constructor(
    private triviaService: TriviaService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.triviaService
      .getTriviaCategories()
      .subscribe(({ trivia_categories }) => {
        this.triviaCategories = trivia_categories;
      });

    this.dropdownForm = new FormGroup({
      category: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
    });

    this.quizService.activatedEmitter.subscribe((data) => {
      // console.log(data);
      this.allQuestionsAnswered = data;
    });
  }

  getQuestions(): void {
    const { category, difficulty } = this.dropdownForm.value;
    this.triviaService
      .getQuestions(category, difficulty)
      .subscribe(({ results }) => {
        this.triviaQuestions = results;
        // console.log(this.triviaQuestions.length);
      });

    this.quizService.setQuestionsAnsweredCountToZero();
  }
}
