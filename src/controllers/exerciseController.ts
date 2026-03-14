import { Request, Response } from "express";
import { supabase } from "../config/supabase.js";

type Exercise = {
  id: number;
  name: string;
  category: string;
};

// const data: Exercise[] = [
//   {
//     id: 1,
//     name: "pull up",
//     category: "back",
//   },
//   {
//     id: 2,
//     name: "incline db press",
//     category: "chest",
//   },
//   {
//     id: 3,
//     name: "leg press",
//     category: "quads",
//   },
// ];

/**
 * GET /exercises
 * Returns all exercises in the database
 */
export const getAllExercises = async (_req: Request, res: Response) => {
  const { data: exercise_library, error } = await supabase
    .from("exercise_library")
    .select("*");

  if (error) {
    console.error("Supabase error: ", error);
    return res.status(500).json({
      message: "Failed to fetch exercises",
      error: error.message,
    });
  }
  res.status(200).json(exercise_library);
};
