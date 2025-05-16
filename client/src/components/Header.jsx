import { useState } from "react";
import { IconBallpen, IconMenuDeep, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const Header = () => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     const toggleMobileMenu = () => {
          setMobileMenuOpen(!mobileMenuOpen);
     };

     return (
          <nav className="w-full bg-blue-500 py-4 px-4">
               <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                         <div className="flex items-center mr-2">
                              <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center">
                                   <div className="h-3 w-3 bg-white rounded-full"></div>
                              </div>
                         </div>
                         <span className="text-white font-semibold text-lg">Untitled UI</span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                         <button onClick={toggleMobileMenu} className="text-white p-2">
                              {mobileMenuOpen ? <IconX size={24} /> : <IconMenuDeep size={24} />}
                         </button>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                         <a href="#" className="text-white px-3 py-2 font-medium">
                              Home
                         </a>

                         <div className="relative group">
                              <a href="#" className="text-white px-3 py-2 font-medium flex items-center">
                                   Products
                              </a>
                         </div>

                         <div className="relative group">
                              <a href="#" className="text-white px-3 py-2 font-medium flex items-center">
                                   Solutions
                              </a>
                         </div>

                         <a href="#" className="text-white px-3 py-2 font-medium">
                              Pricing
                         </a>

                         <div className="relative group">
                              <a href="#" className="text-white px-3 py-2 font-medium flex items-center">
                                   Resources
                              </a>
                         </div>

                         <div className="relative group">
                              <a href="#" className="text-white px-3 py-2 font-medium flex items-center">
                                   Company
                              </a>
                         </div>

                         <Link to="/addBlog" className="group text-white px-3 py-2 font-medium flex items-center">
                              <IconBallpen className="group-hover:text-blue-400 transition duration-300" />
                         </Link>
                    </div>

                    {/* Get Started Button */}
                    <div className="hidden md:flex items-center gap-6">
                         <Link to="/login">
                              <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-50 transition duration-200">
                                   Login
                              </button>
                         </Link>

                         <Link to="/profile">
                              {" "}
                              <div>
                                   <img
                                        className="w-14"
                                        src="https://s3.amazonaws.com/appforest_uf/f1512936020165x278911292087286720/A.png"
                                   />
                              </div>
                         </Link>
                    </div>
               </div>

               {/* Mobile Navigation */}
               {mobileMenuOpen && (
                    <div className="md:hidden mt-2 pt-2 pb-4 space-y-1">
                         <a href="#" className="block text-white px-3 py-2 font-medium">
                              Home
                         </a>
                         <a href="#" className="block text-white px-3 py-2 font-medium">
                              Products
                         </a>
                         <a href="#" className="block text-white px-3 py-2 font-medium">
                              Solutions
                         </a>
                         <a href="#" className="block text-white px-3 py-2 font-medium">
                              Pricing
                         </a>
                         <a href="#" className="block text-white px-3 py-2 font-medium">
                              Resources
                         </a>
                         <a href="#" className="block text-white px-3 py-2 font-medium">
                              Company
                         </a>
                         <a href="#" className="block text-white px-3 py-2 font-medium">
                              Careers
                         </a>
                         <div className="mt-4 px-3">
                              <Link to="/login">
                                   <button className="w-full bg-white text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-50 transition duration-200">
                                        Login
                                   </button>
                              </Link>
                         </div>
                    </div>
               )}
          </nav>
     );
};

export default Header;
