export type Exercise = {
  id: number;
  name: string;
  category: string;
};

export type UserExercise = {
  id: number;
  user_id: string;
  name: string;
  category: string;
};

export type AvailableExercise = {
  id: number;
  name: string;
  category: string;
  source: "custom" | "library";
};
