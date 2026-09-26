import ImpactStory from "../models/ImpactStory.js";

export const getImpactStories = async (req, res) => {
  const stories = await ImpactStory.find().sort({ createdAt: -1 });
  res.json(stories);
};
