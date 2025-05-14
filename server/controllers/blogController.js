const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  const { category, author } = req.query;
  let filter = {};
  if (category) filter.category = category;
  if (author) filter.author = author;

  try {
    const blogs = await Blog.find(filter).sort({ createdAt: -1 }); // optional sorting
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs", error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const { title, category, content, image } = req.body;
  const user = req.user; // From auth middleware

  try {
    const newBlog = await Blog.create({
      title,
      category,
      content,
      image,
      author: user.name,
      userId: user.id, // Use id from token
    });
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: "Blog creation failed", error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  const blogId = req.params.id;
  const userId = req.user.id;

  try {
    const blog = await Blog.findById(blogId);
    if (!blog || blog.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const updated = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  const userId = req.user.id;

  try {
    const blog = await Blog.findById(blogId);
    if (!blog || blog.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Blog.findByIdAndDelete(blogId);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
