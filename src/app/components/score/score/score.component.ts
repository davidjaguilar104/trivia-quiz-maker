import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownComponent } from '../../dropdown/dropdown/dropdown.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @ViewChild('quiz') quiz!: DropdownComponent;

  ngOnInit(): void {
    console.log(this.quiz);
  }
}
