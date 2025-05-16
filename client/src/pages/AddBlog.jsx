import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BlogEditor from "../components/BlogEditor";

const AddBlog = () => {
     const [value, setValue] = useState(""); 
     const [title, setTitle] = useState("");
     const [category, setCategory] = useState("");
     const [image, setImage] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();

     const handleAddBlog = async () => {
          const content = value;
      console.log('categroo', category)

          if (!title.trim() || !category.trim() || !content || content === "<p></p>") {
               return alert("Please fill in all fields including the blog content.");
          }

          try {
               setIsLoading(true);
               const token = localStorage.getItem("token");
               if (!token) return alert("Not authenticated!");

               const res = await axios.post(
                    "http://localhost:5000/api/blogs",
                    { title, category, content, image },
                    { headers: { Authorization: `Bearer ${token}` } }
               );


               alert("Blog created successfully!");

               setTitle("");
               setCategory("");
               setImage("");
               setValue("<p>Write your blog here...</p>");

               navigate("/");
          } catch (err) {
               console.error(" Failed to create blog:", err.response?.data || err.message);
          } finally {
               setIsLoading(false);
          }
     };

     return (
          <div className="mx-60 mt-20">
               <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter blog title"
                    className="w-full border p-2 my-2"
               />
               <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter blog category"
                    className="w-full border p-2 my-2"
               />
               <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Enter image URL"
                    className="w-full border p-2 my-2"
               />

         <BlogEditor value={value} setValue={setValue} />

               <div className="text-center my-14">
                    <button
                         onClick={handleAddBlog}
                         disabled={isLoading}
                         className="border-2 border-blue-400 px-14 py-2 bg-blue-100 hover:bg-blue-800 hover:text-white font-medium ease-in duration-300 rounded-md ml-6"
                    >
                         {isLoading ? "Posting..." : "Add Blog"}
                    </button>
               </div>
          </div>
     );
};

export default AddBlog;
