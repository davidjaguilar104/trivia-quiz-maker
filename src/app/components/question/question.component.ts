import { Component, Input } from '@angular/core';
import { Answer, TriviaQuestion } from '../../interfaces/index';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() triviaQuestion: TriviaQuestion = <TriviaQuestion>{};
  questionAnswers: Answer[] = <Answer[]>[];
  questionAnswered: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.combineQuestionAnswers();
    this.quizService.setTriviaQuestions(this.triviaQuestion);
    this.quizService.setQuestionAnswers(this.questionAnswers);
  }

  combineQuestionAnswers(): void {
    const combinedAnswers: Answer[] = [];
    this.triviaQuestion.incorrect_answers.forEach((answer) => {
      combinedAnswers.push({ isSelected: false, isCorrect: false, answer });
    });

    const answer: string = this.triviaQuestion.correct_answer;
    combinedAnswers.push({ isSelected: false, isCorrect: true, answer });
    this.questionAnswers = this.randomizeQuestionAnswers(combinedAnswers);
  }

  randomizeQuestionAnswers(combinedAnswers: Answer[]): Answer[] {
    let currentIndex: number = combinedAnswers.length;
    let randomIndex: number;

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
