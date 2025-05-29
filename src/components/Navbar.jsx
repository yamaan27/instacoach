import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{ borderBottom: "1px solid #dbe7ff" }}
      className="flex justify-between items-center p-6 shadow-md"
    >
      <h1 className="text-4xl pl-9 font-bold">Instacoach</h1>
      <div className="space-x-6">
        <a href="#" className="text-gray-600">
          How it works
        </a>
        <a href="#" className="text-gray-600">
          Become a Coach
        </a>
        <button className="text-gray-600">Log in</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
