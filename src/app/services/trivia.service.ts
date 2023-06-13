import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  triviaCategoriesUrl: string = 'https://opentdb.com/api_category.php';

  constructor(private httpClient: HttpClient) {}

  getTriviaCategories() {
    return this.httpClient.get(this.triviaCategoriesUrl);
  }
}
