import { Router } from "express";

import * as exerciseController from "../controllers/exerciseController.js";

const router: Router = Router();

router.get("/library", exerciseController.getLibraryExercises);
router.get("/library/:id", exerciseController.getLibraryExerciseById);
router.get("/", exerciseController.getAvailableExercisesForUser);

export default router;
