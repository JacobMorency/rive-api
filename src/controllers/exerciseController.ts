import { Request, Response } from "express";
import * as exerciseService from "../services/exerciseService.js";

const USER_ID: string = "f955de2d-7df9-4e33-817c-b937a926eb83";

/**
 * GET /exercises/library
 * Returns an array of all exercises from the exercise_library table
 */
export const getLibraryExercises = async (_req: Request, res: Response) => {
  const exercises = await exerciseService.getLibraryExercises();
  res.status(200).json(exercises);
};

/**
 * GET /exercises/library/:id
 * Returns specific exercise based on it's id from the exercise_library table
 */
export const getLibraryExerciseById = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const exercise = await exerciseService.getLibraryExerciseById(id);
  res.status(200).json(exercise);
};

/**
 * GET /exercises
 * Returns a combined array of exercises from the exercise_library table + user_exercises table
 */
export const getAvailableExercisesForUser = async (
  req: Request,
  res: Response,
) => {
  const userId: string = USER_ID;
  const exercises = await exerciseService.getAvailableExercisesForUser(userId);
  res.status(200).json(exercises);
};
