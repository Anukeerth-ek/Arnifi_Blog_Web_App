import React from "react";
import { IconDots, IconEdit, IconTrashFilled } from "@tabler/icons-react";
import { Link } from "react-router";

const BlogCard = ({ blog, onDelete }) => {
     console.log("blog", blog);
     const { _id, title, author, content, image, category, createdAt } = blog;

     const formattedDate = createdAt
          ? new Date(createdAt).toLocaleDateString(undefined, {
                 year: "numeric",
                 month: "short",
                 day: "numeric",
            })
          : "";

     return (
          <div className="flex items-start border-b border-gray-300 py-4 relative w-full">
               {/* Left section */}
               <div className="flex-1 pr-6">
                    <h3 className="text-xl font-bold mb-2 cursor-pointer hover:underline">{title}</h3>
                    <p className="text-wheat-700 mb-1 line-clamp-2">{content}</p>
                    <div className="text-sm text-white capitalize">{category}</div>
                    <span className="text-sm text-gray-500 mt-1 block">{formattedDate}</span>
               </div>

               {/* Right section */}
               <div className="flex flex-col w-48">
                    {image && <img src={image} alt={title} className="w-full h-24 object-cover rounded-md mb-2" />}

                    {/* Action buttons below the image */}
                    <div className="flex justify-end space-x-2 mt-auto">
                         <Link to={`/edit/:${id}`}>
                              <button
                                   className="p-2 bg-white shadow-md rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                                   title="Edit"
                              >
                                   <IconEdit size={20} className="text-gray-600 hover:text-blue-600" />
                              </button>
                         </Link>
                         {onDelete && (
                              <button
                                   className="p-2 bg-white shadow-md rounded-full hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
                                   title="Delete"
                                   onClick={onDelete}
                              >
                                   <IconTrashFilled size={20} className="text-gray-600 hover:text-red-600" />
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default BlogCard;
