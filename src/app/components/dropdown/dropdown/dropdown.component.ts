import { Component, OnInit } from '@angular/core';
import { TriviaCategory, TriviaQuestion } from '../../../interfaces';
import { TriviaService } from '../../../services/trivia.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Router } from '@angular/router';

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
    private quizService: QuizService,
    private router: Router
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

  navigateToResultsComponent() {
    this.router.navigateByUrl('/result');
  }
}
