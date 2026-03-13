import express, { Application } from "express";
import exerciseRoutes from "./routes/exercises.js";
import workoutRoutes from "./routes/workouts.js";

const app: Application = express();

app.use("/exercises", exerciseRoutes);
app.use("/workouts", workoutRoutes);

export default app;
