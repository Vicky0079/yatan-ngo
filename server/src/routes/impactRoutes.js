import express from "express";
import { getImpactStories } from "../controllers/impactController.js";

const router = express.Router();
router.get("/", getImpactStories);

export default router;
