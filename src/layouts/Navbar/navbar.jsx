import React from 'react';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import TopNav from './topNav';

export const Navbar = () => {
  return (
    <>
  <TopNav/>
    <div className='px-2 bg-gradient-to-t from-sky-500 to-indigo-500 w-full py-3 rounded'>
      <div className='flex justify-end gap-14 px-20'>
        <div className='text-red-500 text-lg font-semibold transition-transform duration-300 hover:scale-110'>
          Welcome to the TurfKsherta Rohit ❤️
        </div>
        <div className='cursor-pointer text-white text-lg transition-transform duration-300 hover:scale-110'>About Us</div>
        <div className='cursor-pointer text-white text-lg transition-transform duration-300 hover:scale-110'>Services</div>
        <div className='cursor-pointer text-white text-lg transition-transform duration-300 hover:scale-110'>Blogs</div>
        <div className='cursor-pointer text-red-500 text-lg transition-transform duration-300 hover:scale-110'>Contact Us</div>
      </div>
    </div>
    </>
  );
};