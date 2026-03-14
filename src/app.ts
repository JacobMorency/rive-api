import express, { Application } from "express";
import exerciseRoutes from "./routes/exercises.js";

const app: Application = express();

app.use("/exercises", exerciseRoutes);

export default app;
