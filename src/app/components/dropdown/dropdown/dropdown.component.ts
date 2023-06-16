import { Component, OnInit, ViewChildren } from '@angular/core';
import { TriviaCategory, TriviaQuestion } from '../../../models';
import { TriviaService } from '../../../services/trivia.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizComponent } from '../../quiz/quiz/quiz.component';

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

  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.triviaService.getTriviaCategories().subscribe((data) => {
      console.log(data.trivia_categories);
      this.triviaCategories = data.trivia_categories;
    });

    this.dropdownForm = new FormGroup({
      category: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
    });
  }

  getQuestions(): void {
    const { category, difficulty } = this.dropdownForm.value;
    this.triviaService.getQuestions(category, difficulty).subscribe((data) => {
      console.log(data.results);
      this.triviaQuestions = data.results;
    });
  }
}
