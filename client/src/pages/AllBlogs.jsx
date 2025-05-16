import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const params = new URLSearchParams();
      if (category) params.append("category", category);
      if (author) params.append("author", author);

      const res = await axios.get(`http://localhost:5000/api/blogs?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      setBlogs(res.data.blogs);
    } catch (err) {
      console.error("error", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [category, author]); 

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">All Blogs</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Filter by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border px-3 py-2 rounded-md w-full sm:w-1/2"
        />

        <input
          type="text"
          placeholder="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded-md w-full sm:w-1/2"
        />
      </div>

      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs?.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
