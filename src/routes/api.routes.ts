import { Router } from "express";
import { getSystemHealthData } from "../controllers/app.controller";

const apiRouter = Router();

apiRouter.use("/health", getSystemHealthData);
// apiRouter.use("/user");

export default apiRouter;