import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import BlogCard from "./components/BlogCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./profile/UserProfile";

function App() {
     return (
          <>
               <Router>
                    <Header />
                    <Navbar />
                    <Routes>
                         <Route
                              path="/"
                              element={
                                   <>
                                        <BlogCard />
                                   </>
                              }
                         />
                         <Route path="/addBlog" element={<AddBlog />} />
                         <Route path="/login" element={<LoginPage />} />
                         <Route path="/profile" element={<UserProfile/>}/>
                    </Routes>
               </Router>
          </>
     );
}

export default App;
