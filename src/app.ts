import express, { Application } from "express";
import exerciseRoutes from "./routes/exercises.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app: Application = express();

app.use("/exercises", exerciseRoutes);

app.get("/error-test", (req, res) => {
  throw new Error("Oops");
});

app.use(errorHandler);

export default app;
