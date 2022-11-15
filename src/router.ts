import { Router } from "express";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products
router.get("/products", (req, res) => {
  res.send("List products");
});

// Create product
router.post("/products", (req, res) => {
  res.send("create products");
});

// Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("create products");
});

// List orders
router.get("/orders", (req, res) => {
  res.send("List orders");
});

// Create order
router.post("/orders", (req, res) => {
  res.send("create orders");
});

// Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("Change order");
});

// Delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("Change order");
});
