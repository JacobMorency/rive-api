import express from "express";
import exerciseRoutes from "./routes/exercises.js";
import workoutRoutes from "./routes/workouts.js";

const app = express();

app.use("/exercises", exerciseRoutes);
app.use("/workouts", workoutRoutes);

export default app;
