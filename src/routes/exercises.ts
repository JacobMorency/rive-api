import { Router } from "express";

import * as exerciseController from "../controllers/exerciseController.js";

const router: Router = Router();

router.get("/library", exerciseController.getLibraryExercises);
router.get("/library/:id", exerciseController.getLibraryExerciseById);
router.get("/custom/:id", exerciseController.getCustomExerciseById);
router.get("/", exerciseController.getAvailableExercisesForUser);
router.post("/custom/create", exerciseController.createCustomExercise);
router.delete("/custom/:id", exerciseController.deleteCustomExercise);
router.put("/custom/:id", exerciseController.updateCustomExercise);

export default router;
