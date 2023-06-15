import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TriviaCategory } from '../../../models';
import { TriviaService } from '../../../services/trivia.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  triviaCategories: TriviaCategory[] = [];
  dropdownForm!: FormGroup;

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

    console.log(this.dropdownForm);
  }

  getQuestions() {
    console.log(this.dropdownForm);

    this.triviaService.getQuestions(9, 'easy').subscribe((data) => {
      console.log(data.results);
    });
  }
}
