import React, { useState } from 'react';
import TopNav from './topNav';
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <TopNav />
      <div className="bg-gradient-to-t from-sky-500 to-indigo-500 w-full py-3 px-4 md:px-20 rounded relative">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <AiOutlineMenu className="text-white text-2xl cursor-pointer" onClick={toggleDrawer} />
          </div>

          {/* Main Navbar */}
          <div className="hidden md:flex justify-end gap-14 w-full">
            <div className="text-red-500 text-lg font-semibold hover:scale-110 transition-transform">Welcome to TurfKsherta Rohit ❤️</div>
            <Link to="about-us"><div className="cursor-pointer text-white text-lg hover:scale-110 transition-transform">About Us</div></Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="cursor-pointer flex text-white text-lg hover:scale-110 transition-transform">
                Services <IoIosArrowDown className='mt-1 ml-1' />
              </div>
              {showDropdown && (
                <div className="absolute top-full left-0 z-10 mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Web Development</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Mobile App Development</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">SEO Services</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Graphic Design</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="cursor-pointer text-white text-lg hover:scale-110 transition-transform">Blogs</div>
          <Link to={"conatct-us"}>  <div className="cursor-pointer text-red-500 text-lg hover:scale-110 transition-transform">Contact Us</div></Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-4 transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <AiOutlineClose className="text-2xl cursor-pointer mb-4" onClick={toggleDrawer} />
        <ul className="flex flex-col gap-4 text-lg">
          <li className="text-red-500">Welcome to TurfKsherta Rohit ❤️</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Blogs</li>
          <li className="text-red-500 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </>
  );
};
