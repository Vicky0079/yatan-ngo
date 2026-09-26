import express from "express";
import rateLimit from "express-rate-limit";
import { createDonation, getDonations } from "../controllers/donationController.js";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
});

router.post("/", limiter, createDonation);
router.get("/", getDonations);

export default router;
