import { Router } from "express";
import {
  getAllExercises,
  getExerciseById,
} from "../controllers/exerciseController.js";

const router: Router = Router();

router.get("/", getAllExercises);
router.get("/:id", getExerciseById);

export default router;
