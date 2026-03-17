import { Request, Response } from "express";
import * as exerciseService from "../services/exerciseService.js";
import { Exercise, UserExercise } from "../types/exercise.js";

const USER_ID: string = "f955de2d-7df9-4e33-817c-b937a926eb83";

/**
 * GET /exercises/library
 * Returns an array of all exercises from the exercise_library table
 */
export const getLibraryExercises = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const exercises = await exerciseService.getLibraryExercises();
  res.status(200).json(exercises);
};

/**
 * GET /exercises/library/:id
 * Returns specific exercise based on it's id from the exercise_library table
 */
export const getLibraryExerciseById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);
  const exercise = await exerciseService.getLibraryExerciseById(id);
  res.status(200).json(exercise);
};

/**
 * GET /exercises/custom/:id
 * Returns specific exercise based on it's id from the user_exercises table
 */
export const getCustomExerciseById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);
  const userId = USER_ID;
  const exercise = await exerciseService.getCustomExerciseById(id, userId);
  res.status(200).json(exercise);
};

/**
 * GET /exercises
 * Returns a combined array of exercises from the exercise_library table + user_exercises table
 */
export const getAvailableExercisesForUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId: string = USER_ID; // TODO: Dynamically fetch this
  const exercises = await exerciseService.getAvailableExercisesForUser(userId);
  res.status(200).json(exercises);
};

/**
 * POST /exercises/custom/create
 * Allows user to create their own custom exercise on the user_exercises table
 */
export const createCustomExercise = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId: string = USER_ID; // TODO: Dynamically fetch this
  const { name, category } = req.body;
  const exercise = await exerciseService.createCustomExercise(
    userId,
    name,
    category,
  );
  res.status(201).json(exercise);
};

/**
 * DELETE /exercises/custom
 * Allows user to delete an exercise from the user_exercises table
 */
export const deleteCustomExercise = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = USER_ID; // TODO: Dynamically fetch this
  const id = Number(req.params.id);
  await exerciseService.deleteCustomExercise(userId, id);
  res.status(204).send();
};

/**
 * PUT /exercises/custom/id
 * Allows user to update an exercise in the users_exercises table.
 */
export const updateCustomExercise = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = USER_ID;
  const id = Number(req.params.id);
  const { name, category } = req.body;

  const exercise = await exerciseService.updateCustomExercise(
    userId,
    id,
    name,
    category,
  );
  res.status(200).json(exercise);
};
