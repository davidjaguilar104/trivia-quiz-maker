import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
    this.triviaService.getTriviaCategories().subscribe((data) => {
      this.triviaCategories = data;
      console.log(this.triviaCategories);
    });
  }
}
