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
  const [value, setValue] = useState("");

  return (
    <div className="mx-60 mt-40">
      {/* <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        className="h-64"
      /> */}
      <BlogEditor/>
      <div className="text-center my-14">
        <button className="border-2 border-blue-400 px-14 py-2 bg-blue-100 hover:bg-blue-800 hover:text-white font-medium ease-in duration-300 rounded-md ml-6">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
