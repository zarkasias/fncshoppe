import { Router } from "express";
import { getProductById, products } from "../../src/shared/products.js";

export const productsRouter = Router();

productsRouter.get("/", (_req, res) => {
  res.json(products);
});

productsRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({ error: "Invalid product id" });
    return;
  }

  const product = getProductById(id);

  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }

  res.json(product);
});
