import React, { useState } from 'react';
import PollSharpIcon from '@mui/icons-material/PollSharp';
import InterpreterModeSharpIcon from '@mui/icons-material/InterpreterModeSharp';
import GamepadSharpIcon from '@mui/icons-material/GamepadSharp';
import SportsEsportsSharpIcon from '@mui/icons-material/SportsEsportsSharp';
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import SportsGolfSharpIcon from '@mui/icons-material/SportsGolfSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import GavelSharpIcon from '@mui/icons-material/GavelSharp';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:w-[15%] h-[100vh] bg-gray-900 px-4 py-5 fixed left-0 top-0 max-sm:hidden md:w-[30%] '>
  <div className='font-bold text-3xl text-green-500 mb-8'>
    TurfKshetra
  </div>
  <div className="flex flex-col items-start">
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <PollSharpIcon /> Dashboard
    </div>
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <InterpreterModeSharpIcon /> Users
    </div>
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <GamepadSharpIcon /> Turfs
    </div>
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <SportsEsportsSharpIcon /> Games
    </div>
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <CopyrightSharpIcon /> Owners
    </div>
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <SportsGolfSharpIcon /> Bookings
    </div>
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <SettingsSharpIcon /> Settings
    </div>
    <div className="mt-5 hover:bg-green-200 hover:text-black text-white rounded-md py-2 px-10 cursor-pointer w-[100%]">
      <GavelSharpIcon /> Terms
    </div>
  </div>
</div>

  );
};

export default Sidebar;
