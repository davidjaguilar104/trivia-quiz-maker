import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface TriviaCategory {
  id: number;
  name: string;
}

interface Response {
  trivia_categories: Array<TriviaCategory>;
}

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  triviaCategoriesUrl: string = 'https://opentdb.com/api_category.php';

  constructor(private httpClient: HttpClient) {}

  getTriviaCategories() {
    return this.httpClient.get<Response>(this.triviaCategoriesUrl);
  }
}
