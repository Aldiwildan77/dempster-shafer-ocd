import { OCDPredicate } from "./dempster-shafer";

export const AnswerCollection = "answers";

export type UserAnswerResult = {
  created_at: Date;
  finished_at: Date;
  user_id: string;
  predicate: OCDPredicate;
  score: number;
};

export type UserAnswer = {
  serial: string;
  point: number;
};
