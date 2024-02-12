import React from "react";
import Bottombar from "./Bottombar";
import MainInte from "./MainInte";
import Rightsection from "./Rightsection";
import Sidebar from "./Sidebar";
import "./Blogs.css";
import Blogs from "../../assets/blogs.jpg"
const Blogpage = () => {
  return (
    <div className="blogs">
      <div className="h-1/2">
        <img src={Blogs} className="h-1/2  w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-4xl font-bold ">OUR BLOGS</p>
          <br />
          <p className="text-white text-xl font-semibold">"Explore blogs written by members of our club"</p>
        </div>
      </div>
  
      {/* <div className="grid lg:grid-cols-12 grid-cols-1"> */}
      <div>
        {/* <div className="bg-white lg:col-span-1 hidden lg:block">
          <Sidebar />
        </div> */}
        {/* <div className="lg:col-span-8 col-span-1 px-2 lg:px-28 pb-8 text-white ">
          <MainInte />
        </div> */}
        <div className="lg:pb-8 text-white md:justify-center md:mx-[200px] mx-[20px]">
          <MainInte />
        </div>
        {/* <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CCE2FC] hidden lg:block col-span-3">
          <Rightsection />
        </div> */}
        {/* <div className='lg:hidden'>
          <Bottombar />
        </div> */}
      </div>
    </div>
  );
};

export default Blogpage;
