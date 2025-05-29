import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 bg-white shadow-md p-4 rounded-full w-fit mx-auto">
      <input className="px-4 py-2 rounded-md border" placeholder="Category" />
      <input className="px-4 py-2 rounded-md border" placeholder="When" />
      <input className="px-4 py-2 rounded-md border" placeholder="Location" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
