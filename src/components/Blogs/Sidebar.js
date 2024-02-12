import React from "react";
import Home from "../../assets/home-outline.svg";
import Bookmarks from "../../assets/bookmarks-outline.svg";
import Add from "../../assets/add-circle-outline.svg";
import Doc from "../../assets/document-outline.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full border-r-[2px] border-[#E6E6E6]">
      <div className="flex flex-col justify-center mx-auto fixed">
        <div className="my-auto mx-auto w-20 xl:w-28">
          <Link to="/"><img className="my-4 p-2 mx-auto hover:bg-gray-200 hover:rounded-full w-[40px]" src={Home} alt="" /></Link>
          <Link to="/"><img className="my-4 p-2 mx-auto hover:bg-gray-200 hover:rounded-full w-[40px]" src={Bookmarks} alt="" /></Link>
          <Link to="/"><img className="my-4 p-2 mx-auto hover:bg-gray-200 hover:rounded-full w-[40px]" src={Add} alt="" /></Link>
          <Link to="/"><img className="my-4 p-2 mx-auto hover:bg-gray-200 hover:rounded-full w-[40px]" src={Doc} alt="" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;