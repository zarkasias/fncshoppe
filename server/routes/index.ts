import { Router } from "express";
import { healthRouter } from "./health.js";
import { productsRouter } from "./products.js";
import { etsyRouter } from "./etsy.js";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/products", productsRouter);
apiRouter.use("/etsy", etsyRouter);