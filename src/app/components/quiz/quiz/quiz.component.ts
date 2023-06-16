import { Component, Input } from '@angular/core';
import { TriviaQuestion } from 'src/app/models';
import { QuizService } from 'src/app/services/quiz.service';

interface Answer {
  isSelected: boolean;
  isCorrect: boolean;
  answer: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input() triviaQuestion: TriviaQuestion = <TriviaQuestion>{};
  questionAnswers: Answer[] = <Answer[]>[];
  questionAnswered: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    console.log(this.triviaQuestion);
    this.combineQuestionAnswers();
  }

  combineQuestionAnswers(): void {
    const combinedAnswers: Answer[] = [];
    this.triviaQuestion.incorrect_answers.forEach((answer) => {
      combinedAnswers.push({ isSelected: false, isCorrect: false, answer });
    });

    const answer = this.triviaQuestion.correct_answer;
    combinedAnswers.push({ isSelected: false, isCorrect: true, answer });
    console.log(combinedAnswers);
    this.questionAnswers = this.randomizeQuestionAnswers(combinedAnswers);
  }

  randomizeQuestionAnswers(combinedAnswers: Answer[]): Answer[] {
    let currentIndex = combinedAnswers.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [combinedAnswers[currentIndex], combinedAnswers[randomIndex]] = [
        combinedAnswers[randomIndex],
        combinedAnswers[currentIndex],
      ];
    }

    return combinedAnswers;
  }

  checkAnswer(answer: Answer): void {
    console.log(answer);
    this.toggleIsSelected(answer);
  }

  toggleIsSelected(answer: Answer): void {
    this.checkIfQuestionIsAnswered();

    this.questionAnswers.forEach((answer) => {
      answer.isSelected = false;
    });
    answer.isSelected = true;
  }

  checkIfQuestionIsAnswered(): void {
    if (!this.questionAnswered) {
      this.questionAnswered = true;
      this.incrementQuestionsAnsweredCount();
    }
  }

  incrementQuestionsAnsweredCount(): void {
    this.quizService.incrementQuestionsAnsweredCount();
  }
}
