import { Request, Response } from "express";

type Exercise = {
  id: number;
  name: string;
  category: string;
};

const data: Exercise[] = [
  {
    id: 1,
    name: "pull up",
    category: "back",
  },
  {
    id: 2,
    name: "incline db press",
    category: "chest",
  },
  {
    id: 3,
    name: "leg press",
    category: "quads",
  },
];

/**
 * GET /exercises
 * Returns all exercises in the database
 */
export const getAllExercises = (_req: Request, res: Response) => {
  res.status(200).json(data);
};
