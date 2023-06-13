import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

interface TriviaCategory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  triviaCategories: TriviaCategory[] = [];

  constructor(private triviaService: TriviaService) {}

  ngOnInit() {
    this.triviaService.getTriviaCategories().subscribe((data: TriviaCategory[]) => {
      console.log(data);
      this.triviaCategories = data;
      console.log(this.triviaCategories);
      this.triviaCategories = data;
    });
  }
}
