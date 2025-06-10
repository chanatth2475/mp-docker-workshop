import { Router } from "express";
import { addBill, getBill, getCustomer, getProduct } from "./pg";

export const router = Router();

router.get("/customer", async (req, res) => {
  try {
    const result = await getCustomer();
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/product", async (req, res) => {
  try {
    const result = await getProduct();
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/bill", async (req, res) => {
  try {
    const result = await getBill();
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/bill", async (req, res) => {
  try {
    const body = req.body;

    const result = await addBill(
      body.customer_id,
      body.product_id,
      body.quantity
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
