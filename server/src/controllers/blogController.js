import BlogPost from "../models/BlogPost.js";

export const getBlogPosts = async (req, res) => {
  const posts = await BlogPost.find().sort({ date: -1 });
  res.json(posts);
};

export const getBlogPostBySlug = async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};
