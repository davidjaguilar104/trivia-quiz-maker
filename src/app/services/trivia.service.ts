import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaApiResponse, TriviaQuestionsApiResponse } from '../models';

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
    return this.httpClient.get<TriviaQuestionsApiResponse>(
      triviaQuestionsAndAnswersUrl
    );
  }
}
