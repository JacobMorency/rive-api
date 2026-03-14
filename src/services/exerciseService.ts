import { supabase } from "../config/supabase.js";

export const getAllExercises = async () => {
  const { data: exercises, error } = await supabase
    .from("exercise_library")
    .select("*");
  // TODO: Implement error handling
  if (error) {
    throw error;
  }
  return exercises;
};
