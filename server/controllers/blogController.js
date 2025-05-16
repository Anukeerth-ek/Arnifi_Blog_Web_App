const Blog = require('../models/Blog');


exports.getAllBlogs = async (req, res) => {
  try {
    const { category, author } = req.query;
    const filter = {};

    if (category) {
      filter.category = { $regex: new RegExp(category, 'i') }; 
    }

    if (author) {
      filter.author = { $regex: new RegExp(author, 'i') };
    }

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });

    res.status(200).json({ blogs });
  } catch (err) {
    console.error("error", err.message);
    res.status(500).json({ message: "Failed to fetch blogs", error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const { title, category, content, image } = req.body;
  const user = req.user; 

  try {
    const newBlog = await Blog.create({
      title,
      category,
      content,
      image,
      author: user.name,
      userId: user.id,
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
