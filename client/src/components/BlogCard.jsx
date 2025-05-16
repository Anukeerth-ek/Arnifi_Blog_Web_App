import React from "react";

const BlogCard = ({ blog }) => {
  console.log("blog", blog);
  const { title, author, content, image, category } = blog;

  return (
    <div className="rounded-lg p-4 shadow-md border">
      <img
        src={image}
        alt="Card image"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="text-sm text-gray-600 mb-2">{author}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4 line-clamp-3">{content}</p>
      <span className="inline-block border-2 rounded-lg px-3 py-1 text-sm text-gray-700">
        {category}
      </span>
    </div>
  );
};

export default BlogCard;
