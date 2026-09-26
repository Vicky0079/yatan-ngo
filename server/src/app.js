import express from "express";
import cors from "cors";
import programRoutes from "./routes/programRoutes.js";
import impactRoutes from "./routes/impactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Yatan NGO API is running" });
});

app.use("/api/programs", programRoutes);
app.use("/api/impact-stories", impactRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/donate", donationRoutes);
app.use("/api/contact", contactRoutes);

app.use(errorHandler);

export default app;
