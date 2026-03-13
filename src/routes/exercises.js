import { Router } from "express";
import { getAllExercises } from "../controllers/exerciseController.js";

const router = Router();

router.get("/", getAllExercises);

export default router;
