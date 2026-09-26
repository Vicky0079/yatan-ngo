import Program from "../models/Program.js";

export const getPrograms = async (req, res) => {
  const programs = await Program.find().sort({ order: 1 });
  res.json(programs);
};

export const getProgramBySlug = async (req, res) => {
  const program = await Program.findOne({ slug: req.params.slug });
  if (!program) return res.status(404).json({ message: "Program not found" });
  res.json(program);
};
