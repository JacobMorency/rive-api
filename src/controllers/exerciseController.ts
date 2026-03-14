import { Request, Response } from "express";
import * as exerciseService from "../services/exerciseService.js";

/**
 * GET /exercises
 * Returns all exercises in the database
 */
export const getAllExercises = async (_req: Request, res: Response) => {
  const exercises = await exerciseService.getAllExercises();
  res.status(200).json(exercises);
};

/**
 * GET /exercises/:id
 * Returns specific exercise based on it's id
 */
export const getExerciseById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const exercise = await exerciseService.getExerciseById(id);
  res.status(200).json(exercise);
};
