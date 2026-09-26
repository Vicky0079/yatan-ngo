import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Program from "../models/Program.js";
import ImpactStory from "../models/ImpactStory.js";
import BlogPost from "../models/BlogPost.js";
import { programs, impactStories, blogPosts } from "./seedData.js";

const run = async () => {
  await connectDB();
  await Program.deleteMany();
  await ImpactStory.deleteMany();
  await BlogPost.deleteMany();

  await Program.insertMany(programs);
  await ImpactStory.insertMany(impactStories);
  await BlogPost.insertMany(blogPosts);

  console.log("Seed data inserted");
  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
