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
