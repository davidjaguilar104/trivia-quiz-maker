import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface TriviaCategory {
  id: number;
  name: string;
}

interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface TriviaApiResponse {
  trivia_categories: Array<TriviaCategory>;
}

interface TriviaQuestionsApiResponse {
  response_code: number;
  results: TriviaQuestion[];
}

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  triviaCategoriesUrl: string = 'https://opentdb.com/api_category.php';

  constructor(private httpClient: HttpClient) {}

  getTriviaCategories() {
    return this.httpClient.get<TriviaApiResponse>(this.triviaCategoriesUrl);
  }

  getQuestions(category: number, difficulty: string) {
    const triviaQuestionsAndAnswersUrl: string = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.httpClient.get<TriviaQuestionsApiResponse>(triviaQuestionsAndAnswersUrl);
  }
}
