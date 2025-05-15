import React from "react";

const BlogCard = () => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
               {/* Card 1 */}
               <div className=" rounded-lg p-4 shadow-md">
                    <img
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg12Gs3-Lo3DtkL7G_BYYSapF-OU0vnLbebQ&s"
                         alt="Card image"
                         className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="text-sm text-gray-600 mb-2">Author erro • 20/23/2024</div>
                    <h3 className="text-lg font-semibold mb-2">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, illum.
                    </h3>
                    <h5 className="text-gray-700 text-sm mb-4">
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad ut architecto beatae cum
                         voluptatem...
                    </h5>
                    <span className="inline-block border-2 rounded-lg px-3 py-1 text-sm text-gray-700">contents</span>
               </div>

               {/* Repeat card blocks as needed */}
          </div>
     );
};

export default BlogCard;
