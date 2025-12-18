import express, { Express } from "express";
import { backendStatus, notFound } from "./controllers/app.controller";
import apiRouter from "./routes/api.routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";


const app: Express = express();


// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes 
app.get("/", backendStatus); // get route 
app.use("/api", apiRouter); // routes for all api
app.use(notFound); // 404 route
app.use(errorHandler); // error handling middlware

export default app;