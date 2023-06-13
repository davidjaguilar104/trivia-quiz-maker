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

  getTriviaCategories() {
    return this.httpClient.get<TriviaCategory[]>(this.triviaCategoriesUrl).pipe(
      map((res) => {
        const arr = [];

        for (const key in res) {
          console.log(key);
          
          if (res.hasOwnProperty(key)) {
            arr.push({ ...res[key] });
          }
        }

        return arr;
      })
    );
  }
}
