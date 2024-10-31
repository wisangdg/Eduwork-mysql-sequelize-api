import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
} from "../../controllers/productController.js";

const router = express.Router();

router.get("/api/product", getProducts);

router.get("/api/product/:id", getProducts);

router.post("/api/product", createProduct);

router.put("/api/product/:id", updateProduct);

router.delete("/api/product/:id", removeProduct);

export default router;
