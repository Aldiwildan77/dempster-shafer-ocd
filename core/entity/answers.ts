import { OCDPredicate } from "./ocd";

export const AnswerCollection = "answers";

export type Answer = {
  created_at: Date;
  finished_at: Date;
  user_id: string;
  predicate: OCDPredicate;
  score: number;
};
