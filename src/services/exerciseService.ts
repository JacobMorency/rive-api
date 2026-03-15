import { supabase } from "../config/supabase.js";
import { Exercise, UserExercise } from "../types/exercise.js";

// Gets all exercises in the exercise_library table only
export const getLibraryExercises = async (): Promise<Exercise[]> => {
  const { data: exercises, error } = await supabase
    .from("exercise_library")
    .select("*");
  if (error) {
    throw error;
  }
  return exercises;
};

// Gets a specific exercise from the exercise_library table
export const getLibraryExerciseById = async (id: number): Promise<Exercise> => {
  const { data: exercise, error } = await supabase
    .from("exercise_library")
    .select()
    .eq("id", id)
    .single();

  if (error) throw error;

  return exercise;
};

export const getAvailableExercisesForUser = async (
  userId: string,
): Promise<Exercise[]> => {
  const { data: libraryExercises, error: libraryError } = await supabase
    .from("exercise_library")
    .select("*");

  const { data: userExercises, error: userError } = await supabase
    .from("user_exercises")
    .select("id, name, category")
    .eq("user_id", userId);

  if (libraryError) throw libraryError;
  if (userError) throw userError;

  const formattedLibrary = libraryExercises.map((ex) => ({
    ...ex,
    source: "library",
  }));

  const formattedUser = userExercises.map((ex) => ({
    ...ex,
    source: "custom",
  }));

  const exercises = [...formattedLibrary, ...formattedUser];

  return exercises;
};

export const createCustomExercise = async (
  userId: string,
  name: string,
  category: string,
): Promise<Exercise> => {
  const { data: exercise, error } = await supabase
    .from("user_exercises")
    .insert([{ user_id: userId, name: name, category: category }])
    .select()
    .single();

  if (error) throw error;

  return exercise;
};

export const deleteCustomExercise = async (
  userId: string,
  id: number,
): Promise<void> => {
  const { data: exercise, error } = await supabase
    .from("user_exercises")
    .delete()
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) throw error;

  if (!exercise || exercise.length === 0) {
    throw new Error("Exercise not found");
  }
};
