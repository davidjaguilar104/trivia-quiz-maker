import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  constructor(private triviaService: TriviaService) {}

  ngOnInit() {
    this.triviaService.getTriviaCategories().subscribe((data) => {
      console.log(data);
    });
  }
}
