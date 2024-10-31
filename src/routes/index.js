import { Router } from "express";
import productsRouter from "./productRoutes.js";

const router = Router();

// router.use(usersRouter);
router.use(productsRouter);

export default router;
