export type History = {
  doc_id: string;
  score: number;
  predicate: string;
  created_at: Date;
  finished_at: Date;
};

export type Histories = History[];
