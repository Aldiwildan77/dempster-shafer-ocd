import { OCDPredicate } from "./dempster-shafer";

export type History = {
  doc_id: string;
  score: number;
  predicate: OCDPredicate;
  created_at: Date;
  finished_at: Date;
};

export type Histories = History[];
