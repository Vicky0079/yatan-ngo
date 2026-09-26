import mongoose from "mongoose";

const impactStorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    program: { type: String },
    story: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("ImpactStory", impactStorySchema);
