import { TriviaCategory } from './trivia-category';

export interface TriviaApiResponse {
  trivia_categories: Array<TriviaCategory>;
}
