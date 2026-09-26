import express from "express";
import rateLimit from "express-rate-limit";
import { createContact } from "../controllers/contactController.js";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
});

router.post("/", limiter, createContact);

export default router;
