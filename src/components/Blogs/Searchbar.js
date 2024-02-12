import React from "react";
import searchIcon from "../../assets/Search.svg";

const Searchbar = () => {
  return (
    <div className="border-[1px] rounded-full border-black">
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-80 h-10 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-black">
            <img className="w-4 h-4" src={searchIcon} alt="" />
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-black pr-2"
            type="text"
            id="search"
            placeholder="Search"
          /> 
        </div>
      </div>
    </div>
  );
};

export default Searchbar;