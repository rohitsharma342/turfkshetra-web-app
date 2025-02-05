import React from "react";
import { FaSearch } from "react-icons/fa";

const TopNav = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-20 px-6 flex items-center justify-end"
      style={{ backgroundImage: "url('https://marketplace.canva.com/EAGKRVPLHsU/1/0/800w/canva-green-and-white-modern-gradient-health-banner-3dY2FzEBBw4.jpg')" }}
    >
      {/* Logo and Title */}
    
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full text-black focus:outline-none w-48 border-2 text-white"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-500" />
      </div>
    </div>
  );
};

export default TopNav;
