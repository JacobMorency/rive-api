import { supabase } from "../config/supabase.js";

export const getAllExercises = async () => {
  const { data: exercises, error } = await supabase
    .from("exercise_library")
    .select("*");
  if (error) {
    throw error;
  }
  return exercises;
};

export const getExerciseById = async (id: number) => {
  const { data: exercise, error } = await supabase
    .from("exercise_library")
    .select()
    .eq("id", id)
    .single();

  console.log(id);
  console.log(exercise);

  if (error) {
    throw error;
  }

  if (!exercise || exercise.length === 0) {
    throw error;
  }

  return exercise;
};
