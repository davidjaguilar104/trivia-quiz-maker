import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface TriviaCategory {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  triviaCategoriesUrl: string = 'https://opentdb.com/api_category.php';

  constructor(private httpClient: HttpClient) {}

  getTriviaCategories(): Observable<TriviaCategory[]> {
    return this.httpClient
      .get<TriviaCategory[]>(this.triviaCategoriesUrl)
      .pipe(map((res: TriviaCategory[]) => Object.values(res)));
  }
}
