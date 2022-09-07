export type Error = {
  error: string;
  debug?: string;
};

export type Article = {
  puzzleId: number;
  pageName: string;
  article: string;
  title: string;
};

export type EncodedArticle = {
  key: string;
  puzzleId: number;
  pageName: string;
  article: string;
  title: string;
};

export type UserScore = {
  nbAttempts: number;
  nbCorrect: number;
};

export type ArticleInfo = {
  articleId: number;
  pageName?: string;
  userScore?: UserScore;
};

export type CustomGameCreation = {
  pageId: string;
  title: string;
};

export type History = [string, number][];

export type GameState = {
  history: History;
  words: Set<string>;
  isOver: boolean;
  selection: [string, number] | null;
};

export type ArticleStats = {
  distribution: Record<number, number>;
};

export type Settings = {
  lightMode: boolean;
  displayWordLength: boolean;
};

export type SettingsState = {
  settings: Settings | null;
  onChangeSettings: (settings: Partial<Settings>) => void;
};

export type User = {
  id: string;
};

export type UserState = {
  saveScore: (articleId: number, nbAttempts: number, nbCorrect: number) => void;
};
