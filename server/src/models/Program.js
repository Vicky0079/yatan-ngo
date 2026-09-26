import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    hindiName: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    iconUrl: { type: String },
    image: { type: String },
    icon: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Program", programSchema);
