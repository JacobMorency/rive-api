import express, { Application } from "express";
import exerciseRoutes from "./routes/exercises.js";
import { errorHandler } from "./middleware/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load("./src/docs/openapi.yaml");

const app: Application = express();

app.use(express.json());

app.use("/exercises", exerciseRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

export default app;
