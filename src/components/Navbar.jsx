import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlineLogin } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-6 py-4 border-b border-[#dbe7ff] shadow-md">
        <h1 className="text-4xl font-bold pl-9">Instacoach</h1>
        <div className="space-x-6">
          <a href="/how-it-works" className="text-gray-600">
            How it works
          </a>
          <a href="/learn-more/become-a-coach" className="text-gray-600">
            Become a Coach
          </a>
          <button className="text-gray-600">Log in</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Sign up
          </button>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="flex md:hidden justify-between items-center px-4 py-4 border-b border-[#dbe7ff] shadow-md">
        <button onClick={() => setMenuOpen(true)}>
          <HiOutlineMenu className="text-2xl text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold">Instacoach</h1>
        <div className="w-6" /> {/* Spacer to balance layout */}
        <a href="/">
          <HiOutlineLogin className="text-2xl text-gray-700" />
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          {/* Close button */}
          <button onClick={() => setMenuOpen(false)} className="mb-6">
            <HiOutlineX className="text-3xl text-black" />
          </button>

          {/* Menu links */}
          <ul className="space-y-4 text-lg font-semibold">
            <li className="text-[#1273eb] border-b border-blue-100 pb-2">
              <a href="/">Home</a>
            </li>
            <li className="text-black border-b border-blue-100 pb-2">
              <a href="/how-it-works">How it works</a>
            </li>
            <li className="text-black border-b border-blue-100 pb-2">
              <a href="/learn-more/become-a-coach">Become a Coach</a>
            </li>
          </ul>

          {/* Floating "Text us" button */}
          <div className="fixed bottom-6 right-6">
            <button className="bg-[#1273eb] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <span className="text-white text-lg">💬</span>
              Text us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
