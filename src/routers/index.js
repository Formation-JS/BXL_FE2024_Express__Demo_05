import { Router } from "express";
import demoRouter from "./demo.router.js";
import authRouter from "./auth.router.js";

export const apiRouter = Router();

apiRouter.use('/demo', demoRouter);
apiRouter.use('/auth', authRouter);