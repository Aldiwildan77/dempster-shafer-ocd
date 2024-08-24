import { Hypothesis } from "./dempster-shafer";

export const AnswerCollection = "answers";

export type UserAnswerResult = {
  created_at: Date;
  finished_at: Date;
  user_id: string;
  predicate: Hypothesis | string | null;
  score: number;
};

export type UserAnswer = {
  serial: string;
  point: number;
};
