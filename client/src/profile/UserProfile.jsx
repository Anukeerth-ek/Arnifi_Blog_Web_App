import React, { useEffect, useState } from "react";
// import axios from "axios";
import BlogCard from "../components/BlogCard";
import axios from '../api/axios'

const UserProfile = () => {
     const [blogs, setBlogs] = useState([]);
     const [loading, setLoading] = useState(true);
     const token = localStorage.getItem("token");

     useEffect(() => {
          const fetchMyBlogs = async () => {
               try {
                    setLoading(true);
                    const res = await axios.get("http://localhost:5000/api/blogs/my-blogs", {
                         headers: { Authorization: `Bearer ${token}` },
                    });
                    setBlogs(res.data.blogs);
               } catch (err) {
                    console.error("Error fetching user blogs:", err.response?.data || err.message);
               } finally {
                    setLoading(false);
               }
          };
          fetchMyBlogs();
     }, [token]);
     
 const handleDelete = async (blogId) => {
  if (!window.confirm("Are you sure you want to delete this blog?")) return;

  try {
    await axios.delete(`http://localhost:5000/api/blogs/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Remove the deleted blog from the state
    setBlogs((prev) => prev.filter((b) => b._id !== blogId));
  } catch (err) {
    alert("Failed to delete blog: " + (err.response?.data?.message || err.message));
  }
};


     return (
          <div className="mx-32">
               <div className="font-bold text-3xl text-center mt-6">
                    <h2>Profile</h2>
               </div>
               <div>
                    <h3 className="underline mb-4">Published Blogs</h3>
                    {loading ? (
                         <p>Loading your blogs...</p>
                    ) : blogs.length === 0 ? (
                         <p>You haven't published any blogs yet.</p>
                    ) : (
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {blogs.map((blog) => (
                                   <BlogCard key={blog._id} blog={blog} onDelete={() => handleDelete(blog._id)}/>
                              ))}
                         </div>
                    )}
               </div>
          </div>
     );
};

export default UserProfile;
