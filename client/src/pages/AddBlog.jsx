import React, { useState } from "react";
import BlogEditor from "../components/BlogEditor";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

const AddBlog = () => {

 const [value, setValue] = useState(""); // blog content
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(""); // assume image is a URL string

  const handleAddBlog = async () => {
    try {
      const token = localStorage.getItem("token"); // JWT token
     alert('in creation')
      const res = await axios.post(
        "http://localhost:5000/api/blogs", // adjust this to your backend route
        {
          title,
          category,
          content: value,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
     alert('in creation')
      console.log("Blog Created:", res.data);
      // optionally navigate or show success message
    } catch (err) {
      console.error("Failed to create blog:", err.response?.data || err.message);
    }
  };

  return (
    <div className="mx-60 mt-40">

      <BlogEditor/>
      <div className="text-center my-14">
        <button onClick={handleAddBlog} className="border-2 border-blue-400 px-14 py-2 bg-blue-100 hover:bg-blue-800 hover:text-white font-medium ease-in duration-300 rounded-md ml-6">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
