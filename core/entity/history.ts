import { Hypothesis } from "./dempster-shafer";

export type History = {
  doc_id: string;
  score: number;
  predicate: Hypothesis | string | null;
  created_at: Date;
  finished_at: Date;
};

export type Histories = History[];
