import { TriviaQuestion } from './trivia-question';

export interface TriviaQuestionsApiResponse {
  response_code: number;
  results: TriviaQuestion[];
}
